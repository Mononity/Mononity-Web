# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-07-22 14:12
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('client', '0013_in_many'),
    ]

    operations = [
        migrations.AddField(
            model_name='out',
            name='type',
            field=models.CharField(default=django.utils.timezone.now, max_length=200, verbose_name='분류'),
            preserve_default=False,
        ),
    ]