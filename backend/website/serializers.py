from django.contrib.auth.models import User
from rest_framework import serializers
from . import models


class BannerSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Banner
        fields = '__all__'

class ProfileSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Profile
        fields = ['mobile']

class UserSerializers(serializers.ModelSerializer):
    profile = ProfileSerializers()  # Use the nested serializer
    password = serializers.CharField(write_only=True)  # Hide password in the response

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'profile']  # Removed 'mobile'

    def create(self, validated_data):
        # Extract profile and password data
        profile_data = validated_data.pop('profile', None)
        password = validated_data.pop('password')

        # Create User instance
        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.save()

        # Handle Profile creation or update
        if profile_data:
            profile, created = models.Profile.objects.get_or_create(
                user=user,  # Look for existing Profile by User
                defaults={'mobile': profile_data.get('mobile')}  # Use default only if creating
            )
            if not created:  # If Profile already exists, update it
                profile.mobile = profile_data.get('mobile')
                profile.save()
            print(f"Profile {'created' if created else 'updated'}: {profile.mobile}")

        return user



class UserLoginSerializers(serializers.Serializer):
      mobile = serializers.CharField()
      password = serializers.CharField()

class UserMobileSerializers(serializers.Serializer):
      mobile = serializers.CharField()

class MobileOTPSerializers(serializers.Serializer):
      otp = serializers.CharField()

class ChangePasswordSerializers(serializers.Serializer):
      password = serializers.CharField()
      mobile = serializers.CharField()
