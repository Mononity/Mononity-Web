# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-17 16:42
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('client', '0008_auto_20170716_2118'),
    ]

    operations = [
        migrations.RenameField(
            model_name='out',
            old_name='sel_date',
            new_name='ans_date',
        ),
        migrations.RemoveField(
            model_name='in',
            name='pic0',
        ),
        migrations.RemoveField(
            model_name='out',
            name='pic0',
        ),
        migrations.RemoveField(
            model_name='outer',
            name='credits',
        ),
        migrations.AddField(
            model_name='in',
            name='setprice',
            field=models.IntegerField(default=0, verbose_name='\ub099\ucc30\uac00'),
        ),
        migrations.AddField(
            model_name='in',
            name='tags',
            field=models.CharField(default=django.utils.timezone.now, max_length=300, verbose_name='\ud0dc\uadf8'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='out',
            name='suggest',
            field=models.IntegerField(default=0, verbose_name='\uc81c\uc2dc\uac00'),
        ),
        migrations.AddField(
            model_name='outer',
            name='credit',
            field=models.IntegerField(default=0, verbose_name='\uc801\ub9bd\uae08'),
        ),
        migrations.AlterField(
            model_name='in',
            name='content',
            field=models.CharField(max_length=200, verbose_name='\ub0b4\uc6a9'),
        ),
        migrations.AlterField(
            model_name='in',
            name='jumun',
            field=models.CharField(max_length=200, verbose_name='\uc8fc\ubb38\uba85'),
        ),
        migrations.AlterField(
            model_name='in',
            name='outnums',
            field=models.IntegerField(default=0, verbose_name='\uc751\ucc30\uc218'),
        ),
        migrations.AlterField(
            model_name='in',
            name='pic1',
            field=models.CharField(max_length=200, verbose_name='\uc0ac\uc9c41'),
        ),
        migrations.AlterField(
            model_name='in',
            name='pic2',
            field=models.CharField(max_length=200, verbose_name='\uc0ac\uc9c42'),
        ),
        migrations.AlterField(
            model_name='in',
            name='pic3',
            field=models.CharField(max_length=200, verbose_name='\uc0ac\uc9c43'),
        ),
        migrations.AlterField(
            model_name='in',
            name='pic4',
            field=models.CharField(max_length=200, verbose_name='\uc0ac\uc9c44'),
        ),
        migrations.AlterField(
            model_name='in',
            name='pic5',
            field=models.CharField(max_length=200, verbose_name='\uc0ac\uc9c45'),
        ),
        migrations.AlterField(
            model_name='in',
            name='pic6',
            field=models.CharField(max_length=200, verbose_name='\uc0ac\uc9c46'),
        ),
        migrations.AlterField(
            model_name='in',
            name='type',
            field=models.CharField(max_length=200, verbose_name='\ubd84\ub958'),
        ),
        migrations.AlterField(
            model_name='inner',
            name='newnums',
            field=models.IntegerField(default=0, verbose_name='\uc5c5\ub370\uc774\ud2b8\uc218'),
        ),
        migrations.AlterField(
            model_name='inner',
            name='nums',
            field=models.IntegerField(default=0, verbose_name='\uc81c\uc2dc\uc218'),
        ),
        migrations.AlterField(
            model_name='inner',
            name='type',
            field=models.CharField(max_length=200, verbose_name='\ubd84\ub958'),
        ),
        migrations.AlterField(
            model_name='out',
            name='content',
            field=models.CharField(max_length=200, verbose_name='\ub0b4\uc6a9'),
        ),
        migrations.AlterField(
            model_name='out',
            name='dapbyun',
            field=models.CharField(max_length=200, verbose_name='\ub2f5\ubcc0\uba85'),
        ),
        migrations.AlterField(
            model_name='out',
            name='inflag',
            field=models.BooleanField(default=False, verbose_name='\ucc44\ud0dd\uc5ec\ubd80'),
        ),
        migrations.AlterField(
            model_name='out',
            name='pic1',
            field=models.CharField(max_length=200, verbose_name='\uc0ac\uc9c41'),
        ),
        migrations.AlterField(
            model_name='out',
            name='pic2',
            field=models.CharField(max_length=200, verbose_name='\uc0ac\uc9c42'),
        ),
        migrations.AlterField(
            model_name='out',
            name='pic3',
            field=models.CharField(max_length=200, verbose_name='\uc0ac\uc9c43'),
        ),
        migrations.AlterField(
            model_name='out',
            name='pic4',
            field=models.CharField(max_length=200, verbose_name='\uc0ac\uc9c44'),
        ),
        migrations.AlterField(
            model_name='out',
            name='pic5',
            field=models.CharField(max_length=200, verbose_name='\uc0ac\uc9c45'),
        ),
        migrations.AlterField(
            model_name='out',
            name='pic6',
            field=models.CharField(max_length=200, verbose_name='\uc0ac\uc9c46'),
        ),
        migrations.AlterField(
            model_name='outer',
            name='date',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='\uac00\uc785\ub0a0\uc9dc'),
        ),
        migrations.AlterField(
            model_name='outer',
            name='newnums',
            field=models.IntegerField(default=0, verbose_name='\uc5c5\ub370\uc774\ud2b8\uc218'),
        ),
        migrations.AlterField(
            model_name='outer',
            name='nums',
            field=models.IntegerField(default=0, verbose_name='\uc751\ucc30\uc218'),
        ),
        migrations.AlterField(
            model_name='outer',
            name='type',
            field=models.CharField(max_length=200, verbose_name='\ubd84\ub958'),
        ),
        migrations.AlterField(
            model_name='outer',
            name='update',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='\ub85c\uadf8\uc778\ub0a0\uc9dc'),
        ),
    ]
