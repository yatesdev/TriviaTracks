# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_auto_20150725_1231'),
    ]

    operations = [
        migrations.AlterField(
            model_name='requestlist',
            name='endDate',
            field=models.DateTimeField(blank=True),
        ),
        migrations.AlterField(
            model_name='requestlist',
            name='startDate',
            field=models.DateTimeField(blank=True),
        ),
    ]
