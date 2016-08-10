from rest_framework import serializers
from user.serializers import *
from models import *

class SongRequestSerializer(serializers.ModelSerializer):
	class Meta:
		model = SongRequest
		fields = ('song','user', 'date_requested', 'likes')

class SongRequestDetailSerializer(SongRequestSerializer):
	user = UserSerializer(read_only=True)
	class Meta:
		model = SongRequest
		fields = ('id','song','user', 'date_requested', 'likes')
		depth = 3