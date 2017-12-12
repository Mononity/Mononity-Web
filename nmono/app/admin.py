from django.contrib import admin

# Register your models here.
# Register your models here.
from .models import *

class mlAdmin(admin.ModelAdmin):
    fieldsets=[('hash',{'fields':['hash']}),('머신러닝여부',{'fields':['isml']}),('모델명',{'fields':['device']}),('씬이름',{'fields':['scene']}),('클래스',{'fields':['subc']}),('함수명',{'fields':['func']}),('등록일시',{'fields':['regdate']}),('갱신일시',{'fields':['update']})]
    list_display = ['hash','isml','device','scene','subc','func','regdate','update']
    list_filter = ['hash','isml','device','scene','subc','func','regdate','update']
    search_fields =['hash','isml','device','scene','subc','func','regdate','update']
    readonly_fields= ['hash','isml','device','scene','subc','func','regdate','update']

admin.site.register(mlspec,mlAdmin)