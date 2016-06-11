from __future__ import unicode_literals

from django.db import models
from users.models import User

# Create your models here.
class Playlist(models.Model):
	description = models.TextField()
	owner = models.ForeignKey(User)

class PlaylistMetadata(models.Model):
	name = models.CharField(max_length=255)
	spotifyID = models.CharField(max_length=255)
	href = models.URLField()
	public = models.NullBooleanField()
	snapshotID = models.CharField(max_length=255)

