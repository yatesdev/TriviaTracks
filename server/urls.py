"""TriviaTracksAPI URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from user import views as UserViews
from song import views as SongViews
from songrequest import views as RequestViews
from playlist import views as PlaylistViews
from spotify import views as Spotify

router = routers.DefaultRouter()

router.register(r'groups', UserViews.GroupViewSet)
router.register(r'users', UserViews.UserProfileViewSet)
router.register(r'userdetail', UserViews.UserViewSet)
router.register(r'songs', SongViews.SongViewSet)
router.register(r'request', RequestViews.SongRequestViewSet)
router.register(r'playlist', PlaylistViews.PlaylistViewSet)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^search/', Spotify.search)

]
