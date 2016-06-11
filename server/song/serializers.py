from rest_framework import serializers
from models import *

class AlbumMetadataSerializer(serializers.ModelSerializer):
	class Meta:
		model = AlbumMetadata
		fields = ('spotifyID','name','href','album_type','uri')

class ArtistMetadataSerializer(serializers.ModelSerializer):
	class Meta:
		model = ArtistMetadata
		fields = ('spotifyID','name','href','uri')
class SongMetadataSerializer(serializers.ModelSerializer):
	album = AlbumMetadataSerializer(read_only=True)
	artist = ArtistMetadataSerializer(read_only=True)
	class Meta:
		model = SongMetadata
		fields = ('name',
				  'href',
				  'spotifyID',
				  'album',
				  'artist',
				  'popularity',
				  'duration',
				  'explicit',
				  'preview_url',
				  'track_number',
				  'disc_number')

class SongSerializer(serializers.HyperlinkedModelSerializer):
	metadata = SongMetadataSerializer(read_only=True)
	class Meta:
    		model = Song
        	fields = ('metadata','playlist')



