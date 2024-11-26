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
    profile=ProfileSerializers()
    class Meta:
        model = models.User
        fields = ['first_name','last_name','username','password','email','profile']
    def create(self,validated_data):
        user=User.objects.create(**validated_data)
        password=validated_data.pop('password')
        user.set_password(validated_data['password'])
        user.save()
        profile_data=validated_data.pop('profile')
        profile=models.Profile.objects.filter(user=user).update(mobile=profile_data['mobile'])
        return user

class UserLoginSerializers(serializers.Serializer):
      mobile = serializers.CharField()
      password = serializers.CharField()

class UserMobileSerializers(serializers.Serializer):
      mobile = serializers.CharField()

class MobileOTPSerializers(serializers.Serializer):
      mobile = serializers.CharField()

class ChangePasswordSerializers(serializers.Serializer):
      password = serializers.CharField()
      mobile = serializers.CharField()
