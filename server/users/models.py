from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
from songrequests.models import *
from locations.models import *

class UserProfile(models.Model):
	user = models.OneToOneField(User)
	location = models.ForeignKey(Location)
	team_name = models.CharField(max_length=200,blank=True)
	def __unicode__(self):
		return self.user.username


