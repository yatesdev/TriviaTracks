from __future__ import unicode_literals
from django.db import models
from user.models import *
from song.models import *

# Create your models here.

class SongRequest(models.Model):
	song = models.ForeignKey(Song)
	user = models.ForeignKey(User)
	date_requested = models.DateTimeField(auto_now_add=True)
	likes = models.PositiveIntegerField(default=0)
	def __unicode__(self):
		return self.song.metadata.name + " - " + self.user.username