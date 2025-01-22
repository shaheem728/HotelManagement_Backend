from django.shortcuts import render
from rest_framework.generics import ListAPIView,CreateAPIView,RetrieveAPIView
from rest_framework.views import APIView
from . import serializers
from . import models
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
# Create your views here.
class BannerList(ListAPIView):
    serializer_class = serializers.BannerSerializers
    queryset = models.Banner.objects.all()
class UserCreateView(CreateAPIView):
    serializer_class = serializers.UserSerializers
    queryset = models.User.objects.all()

    def create(self, request, *args, **kwargs):
        print(f"Request data: {request.data}")  # Debug incoming data
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        print("Serializer is valid")  # Ensure this is reached
        user = serializer.save()
        print(f"User created: {user.username}")  # Confirm user creation
        headers = self.get_success_headers(serializer.data)
        return Response(
            {"message": "User created successfully", "user": serializers.UserSerializers(user).data},
            status=status.HTTP_201_CREATED,
            headers=headers
        )

class UserLoginView(APIView):
    def post(self, request):
        serializer = serializers.UserLoginSerializers(data=request.data)
        # Check if the serializer is valid
        if not serializer.is_valid():
            return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        error = None
        _token = None
        try:
            profile = models.Profile.objects.get(mobile=serializer.validated_data['mobile'])
            user = profile.user      
            if user.check_password(serializer.validated_data['password']):
                token, created = Token.objects.get_or_create(user=profile.user)
                _token = token.key
            else:
                error = 'Invalid password!!'
        except models.Profile.DoesNotExist:
            error = 'Invalid mobile!!'
        # Return response with user_id only if profile is found
        response_data = {
            'token': _token,
            'user_id': profile.user.id if _token else None,
            'error': error
        }
        return Response(response_data, status=status.HTTP_200_OK if _token else status.HTTP_400_BAD_REQUEST)
class mobileValidateView(APIView):
    def post(self, request):
        serializer = serializers.UserMobileSerializers(data=request.data)
        if serializer.is_valid():
            try:
                profile = models.Profile.objects.get(mobile=serializer.validated_data['mobile'])
                # Mobile number is valid, return success response
                return Response({'message': 'Mobile number is valid.'})
            except models.Profile.DoesNotExist:
                # Mobile number does not exist in the database
                return Response({'error': 'Invalid mobile!!'}, status=status.HTTP_404_NOT_FOUND)
        else:
            # Serializer validation failed
            return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
class OTPValidateView(APIView):
    def post(self, request):
        serializer = serializers.MobileOTPSerializers(data=request.data)
        if serializer.is_valid():
            if serializer.validated_data['otp'] != '1234':  
                return Response({'error': 'OTP not correct'}, status=400)  # Return a 400 status for invalid OTP
            return Response({'message': 'OTP validated successfully'}, status=200)  # Success response
        return Response(serializer.errors, status=400)  # Return validation errors if serializer is invalid  
    def get(self,request):
        return Response({'otp':'1234'})   
class ChangePasswordView(APIView):
    def post(self, request):
        serializer = serializers.ChangePasswordSerializers(data=request.data)
        if serializer.is_valid():
            error=None
            profile=models.Profile.objects.get(mobile=serializer.validated_data['mobile'])
            user=profile.user
            if user:
                user.password=make_password(serializer.validated_data['password'])
                user.save()
            else:
                error='Profile not exists!!'  
            return Response({'error':error})  
   

