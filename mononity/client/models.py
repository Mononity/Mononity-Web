#-*- coding: utf-8 -*-
# Copyright 2015 Google Inc. All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
import datetime
from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
#from django.utils import timezone
IMAGES_PATH='files/%Y%m%d/'

class Searchedkey(models.Model):
    usr=models.ForeignKey(settings.AUTH_USER_MODEL ,blank = True, null = True)
    ipaddr=models.CharField(u'IP주소', max_length=200)
    content = models.CharField(u'검색내용', max_length=200)
    star = models.CharField(u'결과평점', max_length=30, default='null')
    gnrs = models.CharField(u'장르Top3', max_length=30, default='null')
    update = models.DateTimeField(u'사용일시', default=datetime.date.today)  # 최종업데이트 날짜
    isapi=models.BooleanField(u'API여부',default=False)
    intent=models.CharField(u'의도', max_length=300,blank = True, null = True)
    def __str__(self):
        return str(self.usr)

class AppInfo(models.Model):
    usr=models.ForeignKey(settings.AUTH_USER_MODEL ,blank = True, null = True)
    appname=models.CharField(u'앱이름', max_length=100,default='null')
    apikey = models.CharField(u'APIkey', max_length=100,default='null')
    regdate = models.DateTimeField(u'생성일시', default=datetime.date.today)  # 등록 일시
    update = models.DateTimeField(u'갱신일시', default=datetime.date.today)  # 최종업데이트 날짜
    cscnt=models.IntegerField(u'등록소스수',default=0)
    logcnt=models.IntegerField(u'등록로그수',default=0)
    def __str__(self):
        return str(self.usr)+" "+str(self.appname)+" "+self.apikey


class CsFile(models.Model):
    usr=models.ForeignKey(settings.AUTH_USER_MODEL ,blank = True, null = True)
    appname=models.CharField(u'앱이름', max_length=100,default='null')
    apikey = models.CharField(u'APIkey', max_length=32, default='null')
    file = models.FileField(upload_to='files/%Y%m%d/')
    regdate = models.DateTimeField(u'등록일시', default=datetime.date.today)  # 최종업데이트 날짜
    update = models.DateTimeField(u'갱신일시', default=datetime.date.today)  # 최종업데이트 날짜
    logcnt=models.IntegerField(u'등록로그수',default=0)
    def __str__(self):
        return str(self.file)

class logexample(models.Model):
    data=models.CharField(u'data', max_length=1000,default='null')
    ip=models.CharField(u'ipaddr', max_length=100,default='null')
    country = models.CharField(u'location', max_length=32, default='null')
    regdate = models.DateTimeField(u'등록일시', default=datetime.date.today)  # 최종업데이트 날짜
    def __str__(self):
        return str(self.data)



