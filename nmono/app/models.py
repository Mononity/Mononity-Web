from __future__ import unicode_literals

from django.db import models
import datetime
# Create your models here.
class mlspec(models.Model):
    device=models.CharField(u'모델명', max_length=100,default='null')
    func = models.CharField(u'함수명', max_length=100, default='null')
    subc = models.CharField(u'하위클래스', max_length=100, default='null')
    scene=models.CharField(u'씬이름', max_length=100,default='null')
    hash = models.CharField(u'API키', max_length=32, default='OCYXS5K')
    regdate = models.DateTimeField(u'등록일시', default=datetime.date.today)  # 최종업데이트 날짜
    update = models.DateTimeField(u'갱신일시', default=datetime.date.today)  # 최종업데이트 날짜
    isml=models.BooleanField(u'머신러닝여부',default=True)
    def __str__(self):
        return str(self.device)+str(self.hash)+str(self.scene)

