from django.contrib.auth.models import User, Group
from models import *
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username', 'email', 'groups')

class UserProfileSerializer(serializers.ModelSerializer):
	user = UserSerializer(read_only=True)
	class Meta:
		model = UserProfile
		fields = ('id','user','team_name')

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('id', 'name')