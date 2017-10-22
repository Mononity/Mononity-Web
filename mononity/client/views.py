# -*- coding: utf8 -*-

#from __future__ import unicode_literals
from elasticsearch import Elasticsearch
import numpy as np
from collections import Counter
from django.shortcuts import render,get_object_or_404
from django.contrib.auth import logout
from django.http import HttpResponseRedirect
from client.forms import *
from django.contrib.auth import authenticate, login
from client.models import *
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.urls import reverse
from urllib.parse import unquote
import json
from ipware.ip import get_ip
from django.utils import timezone
from django.core.urlresolvers import reverse_lazy
import uuid
import pytz
import zipfile
from django.core.files.storage import default_storage
import os
from io import BytesIO
from os.path import basename
import pygeoip

tz=pytz.timezone('Asia/Seoul')
gi = pygeoip.GeoIP('GeoIP.dat')

def response_mimetype(request):
  if "application/json" in request.META['HTTP_ACCEPT']:
    return "application/json"
  else:
    return "text/plain"


def index(request):
    context = {}
    return render(request, 'index.html', context)


def recl(request):
    if request.user.is_authenticated:
        context = {}
        return render(request, 'recl.html', context)
    else:
        return HttpResponseRedirect('../login')

def ress(request):
    if request.user.is_authenticated:
        context = {}
        return render(request, 'ress.html', context)
    else:
        return HttpResponseRedirect('../login')

@csrf_exempt
def loradust(request):
    global monocnt,gi
    if request.method == 'POST':
        monocnt+=1
        xml=request.body
        print(xml)
        jsoned=json.loads(xml)
        print(str(monocnt) + "/100::" + str(datetime.datetime.now()) + "::" + jsoned)
        ip = get_ip(request)
        if ip is not None:
            print(ip)
        else:
            print("we have no IP address for user")
        addr=gi.country_name_by_addr(str(ip))
        newfile = logexample.objects.create(data=str(jsoned), ip=ip, country=addr, regdate=datetime.datetime.now(tz))
        '''
        container = (str(xml).split('<con>')[1].split('</con>')[0])
        arr = container.split('a')
        if ('' in arr):
            return HttpResponse("ok")
        else:
            dustreger(request, int(arr[0]), int(arr[1]))
        '''
    return HttpResponse(xml)

'''
def stan(request):
     if request.method == 'POST':
        form = UploadFileForm(request.POST, request.FILES)
        if request.FILES:
            new_app = NewFile(file = request.FILES['file'])
            new_app.save()
            return HttpResponseRedirect('/')
        else:
            context = {}
            return HttpResponseRedirect(reverse('appregi'))
     apikey=str(uuid.uuid4().hex)
     context = {'apikey':apikey}
     return render(request, 'stan.html', context)
'''
def makezip(apikey,appname,filearr):
    rawname=appname+'_'+apikey+'.zip'
    zipname=os.path.join(settings.MEDIA_ROOT, 'zipped\\'+rawname)
    with zipfile.ZipFile(zipname, 'w') as myzip:
        for csf in filearr:
            file=os.path.join(settings.MEDIA_ROOT, 'tmp\\'+str(csf))
            with open(file, 'wb') as destination:
                for chunk in csf.chunks():
                    destination.write(chunk)
            myzip.write(file,basename(file))
        myzip.close()
        for csf in filearr:
            file=os.path.join(settings.MEDIA_ROOT, 'tmp\\'+str(csf))
            try:
                os.remove(file)
            except:
                pass
        return rawname
        #donefile=open(file,'r')
        #lines=donefile.readlines()
        #print(lines)

def deletezip(request,zipname):
    dlname = os.path.join(settings.MEDIA_ROOT, 'zipped\\' + zipname)
    try:
        os.remove(dlname)
    except:
        pass
    return HttpResponse('deleted')

def returnzip(apikey,appname,filearr):
    s = BytesIO()
    rawname=appname+'_'+apikey+'.zip'
    zipname=os.path.join(settings.MEDIA_ROOT, 'zipped\\'+rawname)
    #with zipfile.ZipFile(zipname, 'w') as myzip:
    with zipfile.ZipFile(s, 'w') as myzip:
        for csf in filearr:
            file=os.path.join(settings.MEDIA_ROOT, 'tmp\\'+str(csf))
            with open(file, 'wb') as destination:
                for chunk in csf.chunks():
                    destination.write(chunk)
            myzip.write(file,basename(file))
        myzip.close()
        # Grab ZIP file from in-memory, make response with correct MIME-type
        #resp = HttpResponse(s.getvalue(), content_type="application/x-zip-compressed")
        # ..and correct content-disposition
        resp = HttpResponse(s.getvalue(), content_type='application/force-download')
        resp['Content-Disposition'] = 'attachment; filename=%s' % rawname

        return resp
        #donefile=open(file,'r')
        #lines=donefile.readlines()
        #print(lines)


def stan(request):
    if request.method == 'POST':
        form = AppRegForm(request.POST)
        if (form.is_valid()):
            print("form is valid")
            apikey=request.POST['apikey']
            appname=request.POST['appname']
            filearr = []
            for key, value in request.FILES.items():
                if (str(value.name).endswith('.cs')):
                    filearr.append(value)
                    newfile = CsFile.objects.create(apikey=apikey,usr=request.user,file=value,appname=appname,regdate=datetime.datetime.now(tz),update=datetime.datetime.now(tz))
            #instance = form.save(commit=False)
            # request.FILES contains all of the uploaded images
            # key is 'user_image1', 'user_image2', value is the image file in memory
            #return HttpResponseRedirect(reverse('recl'))
            return HttpResponse(makezip(apikey, appname, filearr))
        else:
            print(form.errors)
            #return HttpResponseRedirect(reverse('recl'))
            #return HttpResponseRedirect("www.daum.net")
            return HttpResponse('x')
    else:
        form = AppRegForm()
        apikey=str(uuid.uuid4().hex)
        context = {'form': form,'genkey':apikey}
        return render(request, 'stan.html', context)


def stan_appreg(request):
    if request.user.is_authenticated:
        if request.method == 'POST':
            form = AppRegForm(request.POST)
            if form.is_valid():
                apikey = request.POST['apikey']
                appname = request.POST['appname']
                allcs=CsFile.objects.filter(apikey=apikey).count()
                appinfo= AppInfo.objects.create(usr=request.user,
                                                appname=appname,
                                                apikey=apikey, cscnt=allcs,regdate=datetime.datetime.now(tz),update=datetime.datetime.now(tz)
                                                )
                return apps(request)
            else:
                return HttpResponseRedirect('/')
    else:
        return HttpResponseRedirect('../login')

'''
def stan(request):
    if request.method == 'POST':
        form = UploadForm(request.POST, request.FILES)
        print(request.FILES)
        if form.is_valid():
            apikey = str(uuid.uuid4().hex)
            for file in request.FILES.getlist('file'):
                print(apikey+str(file))
        else:
            print(form.errors)
    else:
        form = UploadForm(initial={'data': 5})

    return render(request, 'stan.html', {'form': form })
'''
def apps(request):
    if request.user.is_authenticated:
        context = {}
        return render(request, 'apps.html', context)
    else:
        return HttpResponseRedirect('../login')


def search(request):
    context = {}
    return render(request, 'search.html', context)


def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            bank=str(form.cleaned_data['bankname']) + '|' + str(form.cleaned_data['accnum'])
            user = User.objects.create_user(username=form.cleaned_data['username'],
                                            password=form.cleaned_data['password1'],
                                            email=form.cleaned_data['email'], first_name=form.cleaned_data['rname'],
                                            last_name=bank
                                           )

            login(request,user)

            return HttpResponseRedirect('/')
        else:
            context={'form': form}
            return render(request, 'registration/register.html',context)
    form = RegistrationForm()
    context={'form': form}
    return render(request, 'registration/register.html',context)