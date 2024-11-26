from django.shortcuts import render
from rest_framework.generics import ListAPIView,RetrieveAPIView,CreateAPIView,DestroyAPIView
from . import serializers
from . import models
# Create your views here.

class RoomTypeListView(ListAPIView):
    serializer_class = serializers.RoomTypeSerializer
    queryset = models.RoomType.objects.all()

class RoomTypeDetailView(RetrieveAPIView):
    serializer_class = serializers.RoomTypeSerializer
    queryset = models.RoomType.objects.all()

class BookingCreateView(CreateAPIView):
    serializer_class = serializers.BookingSerializer
    queryset = models.RoomType.objects.all()

    def post(self,request,*args,**kwargs):
        userToken = request.data['user']
        userobj = Token.objects.get(key=userToken)
        request.data['user']=userobj.user.id
        return super().post(request,*args, **kwargs)

class RoomsListView(ListAPIView):
    serializer_class = serializers.RoomSerializer
    queryset=models.Room.objects.all()
    
    def get_queryset(self):
        qs= super().get_queryset()
        qs=qs.filter(room_type_uuid=self.kwargs['uuid'])
        return qs

class RecentBookingView(ListAPIView):
    serializer_class = serializers.BookingSerializer
    queryset=models.Booking.objects.all()
    
    def get_queryset(self):
        qs= super().get_queryset()
        qs=qs.filter(user_id=self.kwargs['user_id']).order_by('-id')[:1]
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