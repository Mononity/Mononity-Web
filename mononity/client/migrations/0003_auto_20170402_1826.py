# -*- coding: utf-8 -*-
# Generated by Django 1.11b1 on 2017-04-02 09:26
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('client', '0002_auto_20170317_0713'),
    ]

    operations = [
        migrations.AlterField(
            model_name='in',
            name='answered',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='out',
            name='handler',
            field=models.CharField(max_length=200),
        ),
    ]
