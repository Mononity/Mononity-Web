from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from app.models import *
import pytz
import os
import uuid
from app import getd
tz=pytz.timezone('Asia/Seoul')
def index(request):
    pnlist = mlspec.objects.order_by('update')[:7]
    basedir = str(os.getcwd()) + '\\' + 'app\\static\\images\\airplane'
    cgs = os.listdir(basedir)
    context = {'cgs':cgs,'pnlist':pnlist}
    template = loader.get_template('app/index.html')
    return HttpResponse(template.render(context, request))

def machinelearn(request,wildcard):
    device=str(wildcard).split(':')[0]
    scene = str(wildcard).split(':')[1].split('-')[0].lstrip()
    subc = str(wildcard).split(':')[1].split('-')[1]
    func = str(wildcard).split(':')[1].split('-')[2]
    newlearn = mlspec.objects.create(device=device,scene=scene,subc=subc,func=func,regdate=datetime.datetime.now(tz),update=datetime.datetime.now(tz))
    return HttpResponse("ok")
def modeler(request,model):
    basedir = str(os.getcwd()) + '\\' + 'app\\static\\images\\airplane'
    cgs = os.listdir(basedir)
    # newlearn = mlspec.objects.create(device=device,scene=scene,subc=subc,func=func,regdate=datetime.datetime.now(tz),update=datetime.datetime.now(tz))
    context = {'cgs':cgs,'model':model}
    template = loader.get_template('app/index2.html')
    return HttpResponse(template.render(context, request))

def intro(request):
    # pnlist=dict(getd.retphones(7))
    basedir=str(os.getcwd())+'\\'+'app\\static\\images\\airplane'
    cgs=os.listdir(basedir)
    apikey = str(uuid.uuid4().hex)[:16]
    pnlist=mlspec.objects.order_by('update')[:7]
    context = {'pnlist':pnlist,'cgs':cgs,'apikey':apikey}
    # The template to be loaded as per gentelella.
    # All resource paths for gentelella end in .html.

    # Pick out the html file name from the url. And load that template.
    load_template = request.path.split('/')[-1]
    template = loader.get_template('app/' + load_template)
    return HttpResponse(template.render(context, request))

