from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Song(models.Model):
	title = models.CharField(max_length=100, default='')
	track_id = models.CharField(max_length=150, default='')
	album_art_url = models.CharField(max_length=200, default='')
	artist_name = models.CharField(max_length=150, default='')
	def __unicode__(self):
		return self.title + " - " + self.artist_name