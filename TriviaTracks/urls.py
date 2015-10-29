"""TriviaTracks URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from home import views

urlpatterns = [
    url(r'^edit/', include(admin.site.urls)),
    url(r'^admin/', views.admin, name='admin'),
    url(r'^export_email/', views.export_email, name='export_email'),
    url(r'^search/$', views.search, name='search'),
    url(r'^request/$', views.request, name='request'),
    url(r'^location/$', views.location, name='location'),
    url(r'^profile/$', views.profile, name='profile'),
    url(r'^register/$',views.register, name='register'),
    url(r'^login/$', views.login, name='login'),
    url(r'^logout/$', views.logout, name='logout'),
    url(r'^$', views.index, name='index'),
    url('', include('social.apps.django_app.urls', namespace='social')),
]
