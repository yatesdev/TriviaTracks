from rest_framework import serializers
from models import *

class PlaylistMetadataSerializer(serializers.ModelSerializer):
	class Meta:
		model = PlaylistMetadata
		fields = ('name',
				  'spotifyID',
				  'href',
				  'public',
				  'snapshotID')
class PlaylistSerializer(serializers.ModelSerializer):
	metadata = PlaylistMetadataSerializer(read_only=True)
	class Meta:
		model = Playlist
		fields = ('metadata','description','owner')