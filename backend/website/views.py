from django.shortcuts import render
from rest_framework.generics import ListAPIView,CreateAPIView,RetrieveAPIView
from rest_framework.views import APIView
from . import serializers
from . import models
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
# Create your views here.
class BannerList(ListAPIView):
    serializer_class = serializers.BannerSerializers
    queryset = models.Banner.objects.all()
class UserCreateView(CreateAPIView):
    serializer_class = serializers.UserSerializers
    queryset = models.Banner.objects.all()

class UserLoginView(APIView):
    def post(self, request):
        serializer = serializers.UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            error=None
            try:
                profile=models.Profile.objects.get(mobile=serializer.validated_data['mobile'])
                user=profile.user
                if user.check_password(serializer.validated_data['password']):
                    token,created=Token.objects.get_or_create(user=profile.user)
                    _token=token.key
                else:
                    _token=None
                    error='Invalid password!!'  
            except models.Profile.DoesNotExist:
                _token=None
                error='Invalid mobile!!'
            return Response({'token':_token,'user_id':profile.user.id,'error':error})   

class mobileValidateView(APIView):
    def post(self, request):
        serializer = serializers.UserMobileSerializers(data=request.data)
        if serializer.is_valid():
            error=None
            try:
                profile=models.Profile.objects.get(mobile=serializer.validated_data['mobile'])   
            except models.Profile.DoesNotExist:
                error='Invalid mobile!!'
            return Response({'error':error})    
   
class OTPValidateView(APIView):
    def post(self, request):
        serializer = serializers.MobileOTPSerializers(data=request.data)
        if serializer.is_valid():
            error=None
            if serializer.validated_data['otp'] != '1234':
                 error='OTP not correct'        
            return Response({'error':error})    

class ChangePasswordView(APIView):
    def post(self, request):
        serializer = serializers.ChangePasswordSerializers(data=request.data)
        if serializer.is_valid():
            error=None
            try:
                profile=models.Profile.objects.get(mobile=serializer.validated_data['mobile'])
                user=profile.user
                if user:
                    user.password=make_password(serializer.validated_data['password'])
                    user.save()
                else:
                    error='Invalid Detail!!'  
            except models.Profile.DoesNotExist:
                error='Invalid mobile!!'
            return Response({'error':error}) 
   

