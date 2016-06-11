from __future__ import unicode_literals

from django.db import models
from users.models import *

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
	host = models.ForeignKey(User)
	def __unicode__(self):
		return self.name