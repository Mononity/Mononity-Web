# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-10-15 13:21
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('client', '0026_auto_20171015_2136'),
    ]

    operations = [
        migrations.CreateModel(
            name='NewAppFile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('apikey', models.CharField(default='null', max_length=32, verbose_name='앱apikey')),
                ('file', models.FileField(upload_to='files/%Y%m%d/')),
                ('appname', models.CharField(default='null', max_length=30, verbose_name='앱이름')),
                ('update', models.DateTimeField(default=datetime.date.today, verbose_name='등록일시')),
            ],
        ),
        migrations.DeleteModel(
            name='NewAPP',
        ),
        migrations.DeleteModel(
            name='NewCsharp',
        ),
    ]