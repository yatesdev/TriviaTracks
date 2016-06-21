from django.contrib import admin
from models import *

# Register your models here.
admin.site.register(Song)
admin.site.register(SongMetadata)
admin.site.register(AlbumMetadata)
admin.site.register(ArtistMetadata)