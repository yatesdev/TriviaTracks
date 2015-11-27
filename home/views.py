from django.shortcuts import *
from django.http import HttpResponse, JsonResponse, HttpRequest, HttpResponseRedirect
from django.template import RequestContext, loader
from django.core import serializers, mail
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from .models import Song,RequestList,Request, Location
from .forms import SearchForm,UserForm,UserProfileForm
import requests
from datetime import *
from django.conf import settings
from collections import defaultdict
from django.db.models import Count

# Create your views here.
@login_required
def index(request):
	# Recently Requested --Probably needs refactoring at a later point
	requested = Request.objects.order_by('-date_requested')[:20].prefetch_related('song','requestlist','user')
	#search_form = SearchForm()
	template = "home/index.html"
	context = {"requested" : requested}
	return render(request, template,context)

@login_required
def request(request):
	if request.method == "POST":
		track_title = request.POST.get('track_title',None)
		artist_name = request.POST.get('artist_name', None)
		album_art = request.POST.get('album_art', None)
		track_id = request.POST.get('track_spotify_id', None)
		song, created = Song.objects.update_or_create(title=track_title,track_id=track_id, album_art_url=album_art, artist_name=artist_name)
		request_entry = Request(requestlist=RequestList.objects.get(id=1), song=Song.objects.get(id=song.id), user=request.user)
		request_entry.save()
		#get "trivia week"  //Set to switch over at midnight. Could eventually add a host editable "cutoff time" which would change that value
		end_date = (datetime.now() + timedelta(days=(request.user.userprofile.location.schedule_day - datetime.now().isoweekday())%7)).replace(hour=0,minute=0,second=0,microsecond=0)
		print(end_date)
		start_date = end_date - timedelta(days=7)
		print(start_date)
		print(datetime.now())
		r_list, created = RequestList.objects.get_or_create(startDate__lte=datetime.now(),endDate__gte=datetime.now(),
			location=request.user.userprofile.location,defaults={'location': request.user.userprofile.location,'startDate': start_date, 'endDate': end_date})
		request_entry.requestlist = r_list
		request_entry.save()
	return HttpResponseRedirect('/')

@login_required	
def search(request):
	context = RequestContext(request)
	query_string = request.GET.get('q','')
	item_type = 'track,artist'
	market = 'US'
	url = 'https://api.spotify.com/v1/search/'+'?q='+query_string+'&type='+item_type+'&market='+market
	search_response = requests.get(url)
	search_json = search_response.json()
	search_form = SearchForm()
	template = "home/search.html"
	passable = search_json.copy()
	passable.update({"search_form":search_form})
	return render_to_response(template,passable,context)

@login_required
def location(request):
	context = RequestContext(request)
	if(request.user.is_anonymous()):
		location = Location.objects.get(name="Mad River")
	else:
		location = request.user.userprofile.location
	recent = Request.objects.filter(requestlist__location=location, requestlist__startDate__lte=datetime.now(),requestlist__endDate__gte=datetime.now()).order_by('-date_requested')
	archive = Request.objects.filter(requestlist__location=location,requestlist__startDate__lte=datetime.now(),requestlist__endDate__lte=datetime.now()).order_by('-date_requested')
	search_form = SearchForm()
	template = "home/locations.html"
	passable = {"search_form" : search_form,"recent": recent,"archive": archive,"location": location}
	return render_to_response(template,passable,context)

@login_required
def statistics(request):
	context = RequestContext(request)

	#Data!!!
	most_liked = Request.objects.order_by('-likes').prefetch_related('song','requestlist','user')[:3]
	most_active = User.objects.annotate(num_requests=Count('request')).order_by('-num_requests')[:3]

	template = "home/statistics.html"
	passable = {"most_liked" : most_liked, "most_active" : most_active}
	return render_to_response(template,passable,context)

@login_required
def admin(request):
	context = RequestContext(request)
	template = "home/admin.html"
	search_form = SearchForm()
	passable = {"search_form": search_form}
	return render_to_response(template,passable,context)

def export_email(request):
	subject = '[CCTMusic] Music for ' + request.user.userprofile.location.name
	body = ''
	current_requests = Request.objects.filter(requestlist__location=request.user.userprofile.location, requestlist__startDate__lte=datetime.now(),requestlist__endDate__gte=datetime.now()).order_by('-date_requested')
	for item in current_requests:
		body += item.song.title + ' by: ' + item.song.artist_name + ' -- ' + item.user.first_name + ' ' + item.user.last_name + '\n'
	to_address = request.user.email
	from_address = settings.EMAIL_HOST_USER
	mail.send_mail(subject, body, from_address, [to_address],fail_silently=False)
	return HttpResponseRedirect('/')

def like_song_request(request):
	context = RequestContext(request)
	#update like count
	requestID = None
	if request.method == 'GET':
		requestID = request.GET['requestID']
	likes = 0
	if requestID:
		songrequest = Request.objects.get(id=int(requestID))
		if songrequest:
			likes = songrequest.likes + 1
			songrequest.likes = likes
			songrequest.save()
	return HttpResponse(likes)

def unlike_song_request(request):
	context = RequestContext(request)
	#update like count
	requestID = None
	if request.method == 'GET':
		requestID = request.GET['requestID']
	likes = 0
	if requestID:
		songrequest = Request.objects.get(id=int(requestID))
		if songrequest:
			likes = songrequest.likes - 1
			songrequest.likes = likes
			songrequest.save()
	return HttpResponse(likes)

@login_required
def profile(request):
	context = RequestContext(request)
	if request.method == 'POST':
		profile_form = UserProfileForm(data=request.POST,instance=request.user)
		if profile_form.is_valid():
			profile = profile_form.instance.userprofile
			profile.location = profile_form.cleaned_data['location']
			profile.team_name = profile_form.cleaned_data['team_name']
			profile.save()
			return HttpResponseRedirect('/')
		else:
			print(profile_form.errors)
	else:
		profile_form = UserProfileForm(None,instance=request.user,
			initial={"location":request.user.userprofile.location,"team_name":request.user.userprofile.team_name})
	search_form = SearchForm()
	return render_to_response('home/profile.html',
		{'profile_form': profile_form, 'search_form': search_form},
		context)

@login_required
def logout(request):
	auth_logout(request)
	return HttpResponseRedirect('/')

def register(request):
	context = RequestContext(request)
	registered = False
	if request.method == 'POST':
		user_form = UserForm(data=request.POST)
		profile_form = UserProfileForm(data=request.POST)
		if user_form.is_valid() and profile_form.is_valid():
			# user = user_form.save()
			user = User.objects.create_user(user_form.cleaned_data['email'],user_form.cleaned_data['email'],"password")
			user.set_password("password") #Removing passwords from logins, will have a constant from now on.
			user.first_name = user_form.cleaned_data['first_name']
			user.last_name = user_form.cleaned_data['last_name']
			user.save()
			profile = profile_form.save(commit=False)
			profile.user = user
			profile.save()
			user = authenticate(username=request.POST['email'], password="password")
			auth_login(request,user)
			registered = True
		else:
			print(user_form.errors, profile_form.errors)
	else:
		user_form = UserForm()
		profile_form = UserProfileForm()
	search_form = SearchForm()
	return render_to_response('home/register.html',
		{'user_form': user_form, 'profile_form': profile_form, 'search_form': search_form, 'registered': registered},
		context)

def login(request):
	context = RequestContext(request)

	if request.method == 'POST':
		username = request.POST['username']
		password = "password"

		user = authenticate(username=username, password=password)
		if user:
			if user.is_active:
				auth_login(request,user)
				return HttpResponseRedirect('/')
			else:
				return HttpResponse("Your account has been deactivated")
		else:
			return render_to_response('home/login.html',{'invalid': 1},context)
	else:
		search_form = SearchForm()
		return render_to_response('home/login.html',{'search_form':search_form}, context)
