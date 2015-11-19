from .models import UserProfile,Location
import pdb

def create_user_profile(strategy, details, response, user, *args, **kwargs):
	if user:
		# if it is new, we need a user profile
		if kwargs['is_new']:
			profile_user = user
			user.set_password("password")
			user.save()
			location = Location.objects.get(name="Mad River")
			host = False
			team_name = ""
			UserProfile.objects.get_or_create(user=profile_user,location=location,host=host,team_name=team_name)