# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-08-13 12:33
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('client', '0015_auto_20170807_1052'),
    ]

    operations = [
        migrations.CreateModel(
            name='ordering',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='null', max_length=4, verbose_name='예금주(실명)')),
                ('phone', models.CharField(default='null', max_length=30, verbose_name='휴대전화')),
                ('update', models.DateTimeField(default=django.utils.timezone.now, verbose_name='업데이트날짜')),
                ('content', models.CharField(max_length=200, verbose_name='내용')),
            ],
        ),
    ]
