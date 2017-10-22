# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-10-19 20:56
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('client', '0030_auto_20171020_0348'),
    ]

    operations = [
        migrations.AddField(
            model_name='csfile',
            name='appname',
            field=models.CharField(default='null', max_length=100, verbose_name='앱이름'),
        ),
        migrations.AlterField(
            model_name='appinfo',
            name='apikey',
            field=models.CharField(default='null', max_length=100, verbose_name='APIkey'),
        ),
        migrations.AlterField(
            model_name='appinfo',
            name='appname',
            field=models.CharField(default='null', max_length=100, verbose_name='앱이름'),
        ),
    ]
