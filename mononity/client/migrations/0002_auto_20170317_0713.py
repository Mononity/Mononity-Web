# -*- coding: utf-8 -*-
# Generated by Django 1.11b1 on 2017-03-16 22:13
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('client', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='inner',
            name='email',
            field=models.EmailField(default=b'devestack@gmail.com', max_length=254, verbose_name='\uc774\uba54\uc77c'),
        ),
        migrations.AddField(
            model_name='inner',
            name='password',
            field=models.CharField(default=b'null', max_length=30, verbose_name='\ube44\ubc00\ubc88\ud638'),
        ),
        migrations.AddField(
            model_name='inner',
            name='phone',
            field=models.CharField(default=b'null', max_length=30, verbose_name='\ud734\ub300\uc804\ud654'),
        ),
        migrations.AddField(
            model_name='inner',
            name='username',
            field=models.CharField(default=b'null', max_length=30, verbose_name='\uc544\uc774\ub514'),
        ),
        migrations.AddField(
            model_name='outer',
            name='email',
            field=models.EmailField(default=b'devestack@gmail.com', max_length=254, verbose_name='\uc774\uba54\uc77c'),
        ),
        migrations.AddField(
            model_name='outer',
            name='password',
            field=models.CharField(default=b'null', max_length=30, verbose_name='\ube44\ubc00\ubc88\ud638'),
        ),
        migrations.AddField(
            model_name='outer',
            name='phone',
            field=models.CharField(default=b'null', max_length=30, verbose_name='\ud734\ub300\uc804\ud654'),
        ),
        migrations.AddField(
            model_name='outer',
            name='username',
            field=models.CharField(default=b'null', max_length=30, verbose_name='\uc544\uc774\ub514'),
        ),
        migrations.AlterField(
            model_name='inner',
            name='date',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='\uac00\uc785\ub0a0\uc9dc'),
        ),
        migrations.AlterField(
            model_name='inner',
            name='update',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='\ub85c\uadf8\uc778\ub0a0\uc9dc'),
        ),
        migrations.AlterField(
            model_name='outer',
            name='date',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name=b'\xea\xb0\x80\xec\x9e\x85\xeb\x82\xa0\xec\xa7\x9c'),
        ),
        migrations.AlterField(
            model_name='outer',
            name='update',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name=b'\xeb\xa1\x9c\xea\xb7\xb8\xec\x9d\xb8\xeb\x82\xa0\xec\xa7\x9c'),
        ),
    ]