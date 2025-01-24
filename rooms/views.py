from django.shortcuts import render
from rest_framework.generics import ListAPIView,RetrieveAPIView,CreateAPIView,DestroyAPIView
from . import serializers
from . import models
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models  import Token
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class RoomTypeListView(ListAPIView):
    serializer_class = serializers.RoomTypeSerializer
    queryset = models.RoomType.objects.all().order_by('title')

class RoomTypeDetailView(RetrieveAPIView):
    serializer_class = serializers.RoomTypeSerializer
    queryset = models.RoomType.objects.all()
    lookup_field = 'uuid'

class BookingCreateView(CreateAPIView):
    queryset = models.Booking.objects.all()
    serializer_class = serializers.BookingSerializer

    def post(self, request, *args, **kwargs):
        print(request.data)  # Debug incoming data

        userToken = request.data.get("user")
        if not userToken:
            return Response({"error": "Token is missing."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            userObj = Token.objects.get(key=userToken)
        except Token.DoesNotExist:
            return Response({"error": "Invalid token."}, status=status.HTTP_401_UNAUTHORIZED)

        # Replace 'user' field with user's ID
        request.data['user'] = userObj.user.id

        # Validate payload
        serializer = self.get_serializer(data=request.data)
        if not serializer.is_valid():
            print(serializer.errors)  # Debug serializer errors
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        return super().post(request, *args, **kwargs)

         
class RoomsListView(ListAPIView):
    serializer_class = serializers.RoomSerializer
    queryset=models.Room.objects.all()
    
    def get_queryset(self):
        qs = super().get_queryset()
        qs = qs.filter(room_type__uuid=self.kwargs['uuid'])
        return qs

class RecentBookingView(ListAPIView):
    serializer_class = serializers.BookingSerializer
    queryset=models.Booking.objects.all()
    def get_queryset(self):
        qs= super().get_queryset()
        qs=qs.filter(user_id=self.kwargs['user_id'])
        print(qs)
        return qs

class DeleteBookingView(DestroyAPIView):
    serializer_class = serializers.BookingSerializer
    queryset=models.Booking.objects.all()
    
    

class MyBookingView(ListAPIView):
    serializer_class = serializers.BookingSerializer
    queryset=models.Booking.objects.all()
    
    def get_queryset(self):
        qs= super().get_queryset()
        qs=qs.filter(user_id=self.kwargs['user_id']).order_by('-id')
        return qs
class InvoiceDetailView(RetrieveAPIView):
    queryset=models.Invoice.objects.all()
    serializer_class=serializers.InvoiceSerializer
    lookup_field='uuid'        

class GalleryListView(ListAPIView):
    serializer_class = serializers.GallerySerializers
    queryset = models.Gallery.objects.all()    