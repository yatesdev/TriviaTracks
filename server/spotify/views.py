from django.shortcuts import render
from django.http import JsonResponse
from models import *
import spotipy

def search(request):
	spotify = spotipy.Spotify()
	querystring = request.GET.get('q','')
	SearchLog.objects.create(querystring=querystring, user=request.user)
	results = spotify.search(q=request.GET.get('q',''), type='track')
	return JsonResponse(results)


	