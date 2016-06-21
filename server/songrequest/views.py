from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import detail_route
from serializers import *

class SongRequestViewSet(viewsets.ModelViewSet):
	queryset = SongRequest.objects.all()
	serializer_class = SongRequestSerializer

	@detail_route()
	def detail(self, request, pk=None):
		songrequest = self.get_object()
		serializer = SongRequestDetailSerializer(songrequest)
		return Response(serializer.data)
		