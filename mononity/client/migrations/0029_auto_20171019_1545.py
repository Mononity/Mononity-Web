# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-10-19 06:45
from __future__ import unicode_literals

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('client', '0028_auto_20171019_1537'),
    ]

    operations = [
        migrations.CreateModel(
            name='CsFile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('apikey', models.CharField(default='null', max_length=32, verbose_name='APIkey')),
                ('file', models.FileField(upload_to='files/%Y%m%d/')),
                ('regdate', models.DateTimeField(default=datetime.date.today, verbose_name='등록일시')),
                ('update', models.DateTimeField(default=datetime.date.today, verbose_name='갱신일시')),
                ('logcnt', models.IntegerField(default=0, verbose_name='등록로그수')),
                ('usr', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.RemoveField(
            model_name='appfile',
            name='usr',
        ),
        migrations.DeleteModel(
            name='AppFile',
        ),
    ]
