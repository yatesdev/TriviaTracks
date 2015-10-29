# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('schedule_day', models.PositiveSmallIntegerField(choices=[(None, 'Not Scheduled'), (1, 'Monday'), (2, 'Tuesday'), (3, 'Wednesday'), (4, 'Thursday'), (5, 'Friday'), (6, 'Saturday'), (7, 'Sunday')], null=True, default=None)),
            ],
        ),
        migrations.CreateModel(
            name='Request',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('date_requested', models.DateTimeField(null=True, auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='RequestList',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('startDate', models.DateField(blank=True)),
                ('endDate', models.DateField(blank=True)),
                ('location', models.ForeignKey(to='home.Location')),
            ],
        ),
        migrations.CreateModel(
            name='Song',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, default='')),
                ('track_id', models.CharField(max_length=150, default='')),
                ('album_art_url', models.CharField(max_length=200, default='')),
                ('artist_name', models.CharField(max_length=150, default='')),
            ],
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('host', models.BooleanField(default=False)),
                ('team_name', models.CharField(max_length=200, blank=True)),
                ('location', models.ForeignKey(to='home.Location')),
                ('user', models.OneToOneField(to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='request',
            name='requestlist',
            field=models.ForeignKey(to='home.RequestList'),
        ),
        migrations.AddField(
            model_name='request',
            name='song',
            field=models.ForeignKey(to='home.Song'),
        ),
        migrations.AddField(
            model_name='request',
            name='user',
            field=models.ForeignKey(to=settings.AUTH_USER_MODEL),
        ),
    ]
