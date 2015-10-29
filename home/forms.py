from home.models import UserProfile
from django.contrib.auth.models import User
from django import forms

class SearchForm(forms.Form):
	q = forms.CharField(widget=forms.TextInput(attrs={'class' : 'mdl-textfield__input', 'placeholder' :'Artist or Song'}),label='', max_length=100)
	type = forms.CharField(initial='track,artist',widget=forms.HiddenInput)
	market = forms.CharField(initial='US',widget=forms.HiddenInput)

class UserForm(forms.ModelForm):
	password = forms.CharField(widget=forms.PasswordInput())
	class Meta:
		model = User
		fields = ('first_name','last_name','username','email','password')

class UserProfileForm(forms.ModelForm):
	class Meta:
		model = UserProfile
		fields = ('location','team_name',)