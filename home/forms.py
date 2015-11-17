from home.models import UserProfile
from django.contrib.auth.models import User
from django import forms
from django.utils.translation import ugettext_lazy as _

class SearchForm(forms.Form):
	q = forms.CharField(widget=forms.TextInput(attrs={'class' : 'mdl-textfield__input', 'placeholder' :'Artist or Song'}),label='', max_length=100)
	type = forms.CharField(initial='track,artist',widget=forms.HiddenInput)
	market = forms.CharField(initial='US',widget=forms.HiddenInput)

class UserForm(forms.ModelForm):
	class Meta:
		model = User
		fields = ('first_name','last_name','email')
		widgets = {
            'first_name': forms.TextInput(attrs={'class':'form-control', 'required':'true'}),
            'last_name': forms.TextInput(attrs={'class':'form-control', 'required':'true'}),
            'email': forms.EmailInput(attrs={'class':'form-control', 'required':'true'}),
        }
        labels = {
        	'first_name' : _('First Name'),
        	'last_name' : _('Last Name'),
        	'email' : _('Email Address'),
        }
        error_messages = {
			'first_name' : _('First Name Required'),
			'last_name' : _('Last Name Required'),
			'email' : _('Email Address Required'),
		}

class UserProfileForm(forms.ModelForm):
	class Meta:
		model = UserProfile
		fields = ('location','team_name',)
		widgets = {
			'location' : forms.Select(attrs={'class':'cs-select form-control cs-skin-slide cs-transparent', 'data-init-plugin':'cs-select', 'required':'true'}),
			'team_name' : forms.TextInput(attrs={'class':'form-control', 'required':'true'}),
		}
		labels = {
			'location' : _('Location'),
			'team_name' : _('Team Name'),
		}