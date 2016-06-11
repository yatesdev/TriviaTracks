from __future__ import unicode_literals

from django.db import models
from playlists.models import *

# Create your models here.
class AlbumMetadata(models.Model):
	spotifyID = models.CharField(max_length=255)
	name = models.CharField(max_length=255)
	href = models.URLField()
	album_type = models.CharField(max_length=255)
	uri = models.CharField(max_length=255)

class ArtistMetadata(models.Model):
	spotifyID = models.CharField(max_length=255)
	name = models.CharField(max_length=255)
	href = models.URLField()
	uri = models.CharField(max_length=255)

class SongMetadata(models.Model):
	album = models.ForeignKey(AlbumMetadata)
	artist = models.ForeignKey(ArtistMetadata)
	spotifyID = models.CharField(max_length=255)
	href = models.URLField()
	name = models.CharField(max_length=255)
	popularity = models.IntegerField()
	duration = models.IntegerField()
	explicit = models.BooleanField()
	preview_url = models.URLField()
	track_number = models.IntegerField()
	disc_number = models.IntegerField()

class Song(models.Model):
	metadata = models.ForeignKey(SongMetadata)
	playlist = models.ForeignKey(Playlist)
