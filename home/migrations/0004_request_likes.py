# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_auto_20150730_2126'),
    ]

    operations = [
        migrations.AddField(
            model_name='request',
            name='likes',
            field=models.PositiveIntegerField(default=0, null=True),
        ),
    ]
