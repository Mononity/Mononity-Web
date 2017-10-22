# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-10-15 11:51
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('client', '0024_auto_20171015_0629'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomerProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('apikey', models.EmailField(blank=True, db_column='apikey', max_length=30, null=True)),
                ('user_image1', models.ImageField(db_column='user_image1', upload_to='files/%Y%m%d/')),
                ('user_image2', models.ImageField(db_column='user_image2', upload_to='files/%Y%m%d/')),
                ('user_image3', models.ImageField(db_column='user_image3', upload_to='files/%Y%m%d/')),
                ('user_image4', models.ImageField(db_column='user_image4', upload_to='files/%Y%m%d/')),
                ('user_image5', models.ImageField(db_column='user_image5', upload_to='files/%Y%m%d/')),
            ],
        ),
        migrations.CreateModel(
            name='NewAPP',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to='files/%Y%m%d/')),
                ('apikey', models.CharField(default='null', max_length=30, verbose_name='앱apikey')),
            ],
        ),
        migrations.DeleteModel(
            name='NewFile',
        ),
    ]
