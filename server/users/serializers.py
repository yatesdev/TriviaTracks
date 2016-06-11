from django.contrib.auth.models import User, Group
from models import *
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')

class UserProfileSerializer(serializers.HyperlinkedModelSerializer):
	user = UserSerializer(read_only=True)
	class Meta:
		model = UserProfile
		fields = ('url','user','team_name')

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')