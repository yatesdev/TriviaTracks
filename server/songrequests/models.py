from __future__ import unicode_literals

from django.db import models
from users.models import *

# Create your models here.

class Request(models.Model):
	
	def __unicode__(self):
		return ""
	# requestlist = models.ForeignKey(RequestList)
	# song = models.ForeignKey(Song)
	# user = models.ForeignKey(User)
	# date_requested = models.DateTimeField(auto_now_add=True, blank=True, null=True)
	# likes = models.PositiveIntegerField(null=True, default=0)
	# def __unicode__(self):
	# 	return self.song.title + " - " + self.user.username