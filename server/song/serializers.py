from rest_framework import serializers
from models import *

class SongMetadataSerializer(serializers.ModelSerializer):
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
        	fields = ('metadata',)

