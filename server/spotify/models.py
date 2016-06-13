from __future__ import unicode_literals
from django.db import models
from user.models import *

class SearchLog(models.Model):
	query = models.CharField(max_length=255)
	user = models.ForeignKey(User)
	datetime = models.DateTimeField(auto_now_add=True)
