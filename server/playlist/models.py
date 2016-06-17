from __future__ import unicode_literals

from django.db import models
from user.models import User

class PlaylistMetadata(models.Model):
	name = models.CharField(max_length=255)
	spotifyID = models.CharField(max_length=255)
	href = models.URLField()
	public = models.NullBooleanField()
	snapshotID = models.CharField(max_length=255)

class Playlist(models.Model):
	metadata = models.ForeignKey(PlaylistMetadata)
	description = models.TextField()
	owner = models.ForeignKey(User)
