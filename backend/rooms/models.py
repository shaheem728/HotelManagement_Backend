from django.db import models
from django.contrib.auth.models import User
import uuid
# Create your models here.
class RoomType(models.Model):
    uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    title = models.CharField(max_length=255)
    detail = models.JSONField(null=True)
    per_day_charges = models.PositiveIntegerField(default=0)
    
    class Meta:
        ordering = ['title']  # Specify the default ordering here

    def __str__(self):
        return self.title

class Room(models.Model):
    room_type=models.ForeignKey(RoomType,on_delete=models.CASCADE) 
    room_no = models.CharField(max_length=100)       
    room_decs = models.TextField(null=True)
    
    def __str__(self):
        return f'{self.room_no}-{self.room_type}'
class Booking(models.Model):
    room_no= models.ForeignKey(Room, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    booking_date = models.DateTimeField(auto_now_add=True)
    total_guest = models.IntegerField()
    checkin_date=models.DateField()
    checkout_date=models.DateField()
    booking_amount=models.DecimalField(max_digits=10,decimal_places=2)
    booking_detail=models.JSONField(null=True,blank=True)
    status = models.CharField(max_length=100,null=True,default='pending')

    def __str__(self):
        return f'{self.room_no.room_no}-{self.user}'

    def get_booking_date(self):
        return self.booking_date.date()
  

class Invoice(models.Model):
    booking = models.OneToOneField('Booking', on_delete=models.CASCADE, related_name='invoice')
    invoice_date = models.DateTimeField(auto_now_add=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)  # Set default here
    status = models.CharField(max_length=50, default='unpaid')

    def __str__(self):
        return f'Invoice-{self.id} for Booking-{self.booking.id}'
    
class Payment(models.Model):
    booking = models.ForeignKey(Booking,on_delete=models.CASCADE)
    text_id = models.TextField()
    total_amt = models.DecimalField(max_digits=10,decimal_places=2)
    response_data=models.TextField()
    payment_date=models.DateTimeField(auto_now_add=True)        
class Gallery(models.Model):
    image = models.ImageField(upload_to='gallery_image/')   

class RoomImage(models.Model):
    room_type = models.ForeignKey(RoomType,on_delete=models.CASCADE,null=True,related_name='room_type_image') 
    image = models.ImageField(upload_to='room_image/')

    def __str__(self):
        return self.room_type.title
    