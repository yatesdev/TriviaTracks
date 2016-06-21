from __future__ import unicode_literals
from django.db import models
from user.models import *


class SearchLog(models.Model):
	querystring = models.CharField(max_length=255, editable=False)
	user = models.ForeignKey(User, editable=False)
	datetime = models.DateTimeField(auto_now_add=True, editable=False)
