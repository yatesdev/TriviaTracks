from django.contrib import admin
from .models import Song,Location,Request,RequestList,UserProfile

# Register your models hereself.
admin.site.register(Song)
admin.site.register(Location)
admin.site.register(Request)
admin.site.register(RequestList)
admin.site.register(UserProfile)