from rest_framework import serializers
from . import models
from django.contrib.auth.models import User
from website.models import Profile

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

        
class GallerySerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Gallery
        fields = '__all__'

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Room
        fields = '__all__'
class RoomTypeImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.RoomImage
        fields = [ 'image']
class RoomTypeSerializer(serializers.ModelSerializer):
    room_type_image=RoomTypeImageSerializer(many=True,read_only=True)
    class Meta:
        model = models.RoomType
        fields = ['uuid','title','detail','room_type_image','per_day_charges']

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Room
        fields = ['id','room_type','room_no']

class InvoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Invoice
        fields = ['booking','invoice_number','uuid','payment_status']

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Booking
        fields = [
            'id',
            'room_no',
            'user',
            'total_guest',
            'checkin_date',
            'checkout_date',
            'booking_amount',
            'booking_detail',
            'status',
            'booking_date',
        ]
        read_only_fields = ['id', 'status', 'booking_date']

    def create(self, validated_data):
        # Create the booking
        booking = models.Booking.objects.create(**validated_data)

        # Automatically create an invoice
        invoice = models.Invoice.objects.create(
            booking=booking,
            amount=booking.booking_amount,
        )

        # Return only the booking instance
        return booking


      
# class BookingSerializer(serializers.ModelSerializer):
#     user=UserSerializer()
#     room_no=RoomSerializer()
#     formatted_date=serializers.SerializerMethodField()
#     invoice=InvoiceSerializer(source='booking_invoice',read_only=True)
#     class Meta:
#         model = models.Booking
#         fields = ['id','room_no','user','total_quest','total_quest','checking_date','checkout_date',
#         'booking_amount','booking_detail','status','formatted_date','invoice']
#         read_only_fields=['formatted_date']
       
        # def created(self,valiidated_data):
        #     return models.Booking.objects.create(**valiidated_data)

        # def get_formatted_date(self, obj):
        #     return obj.booking_date.strftime('%Y-%m-%d')

# class RoomBookingSerializer(serializers.ModelSerializer):
#     user=UserSerializer()
#     room_no=RoomSerializer()
#     formatted_date=serializers.SerializerMethodField()
#     invoice=InvoiceSerializer(source='booking_invoice',read_only=True)
#     class Meta:
#         model = models.Booking
#         fields = ['id','room_no','user','total_quest','total_quest','checking_date','checkout_date',
#         'booking_amount','booking_detail','status','formatted_date','invoice']
#         read_only_fields=['formatted_date']
       
        # def created(self,valiidated_data):
        #     return models.Booking.objects.create(**valiidated_data)

        # def get_formatted_date(self, obj):
        #     return obj.booking_date.strftime('%Y-%m-%d')
