from models import *
from rest_framework import viewsets
from serializers import *

class PlaylistViewSet(viewsets.ModelViewSet):
	queryset = Playlist.objects.all()
	serializer_class = PlaylistSerializer