from django.db import models
from django.conf import settings
from django.contrib.auth.models import User

# Create your models here.
class Location(models.Model):
	name = models.CharField(max_length=100)
	SCHEDULE_CHOICES = (
		(None,'Not Scheduled'),
		(1,'Monday'),
		(2,'Tuesday'),
		(3,'Wednesday'),
		(4,'Thursday'),
		(5,'Friday'),
		(6,'Saturday'),
		(7,'Sunday'),
	)
	schedule_day = models.PositiveSmallIntegerField(null=True,choices=SCHEDULE_CHOICES,default=None)
	def __str__(self):
		return self.name

class RequestList(models.Model):
	location = models.ForeignKey(Location)
	startDate = models.DateTimeField(blank=True)
	endDate = models.DateTimeField(blank=True)
	def __str__(self):
		return self.location.name + " - " + str(self.startDate) + " | " + str(self.endDate)
	def tostring(self):
		return str(self.startDate.strftime("%b %d, %y")) + " - " + str(self.endDate.strftime("%b %d, %y"))

class Song(models.Model):
	title = models.CharField(max_length=100, default='')
	track_id = models.CharField(max_length=150, default='')
	album_art_url = models.CharField(max_length=200, default='')
	artist_name = models.CharField(max_length=150, default='')
	def __str__(self):
		return self.title + " - " + self.artist_name

class Request(models.Model):
	requestlist = models.ForeignKey(RequestList)
	song = models.ForeignKey(Song)
	user = models.ForeignKey(User)
	date_requested = models.DateTimeField(auto_now_add=True, blank=True, null=True)
	def __str__(self):
		return self.song.title + " - " + self.user.username

class UserProfile(models.Model):
	user = models.OneToOneField(User)
	location = models.ForeignKey(Location)
	host = models.BooleanField(default=False)
	team_name = models.CharField(max_length=200, blank=True)
	def __str__(self):
		return self.user.username




