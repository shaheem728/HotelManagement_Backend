from django.db import models
from django.contrib.auth.models import User
from rooms.models import Booking
from event.models import EventBooking
from django.db.models.signals import post_save
from django.dispatch import receiver
# Create your models here.
class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    review_text = models.TextField(null=True)
    rating = models.IntegerField(default=1)
    room = models.ForeignKey(Booking,on_delete=models.SET_NULL,null=True)
    event_booking = models.ForeignKey(EventBooking,on_delete=models.SET_NULL,null=True)
    add_time = models.DateTimeField(auto_now_add=True)

class Contact(models.Model):
    full_name = models.CharField(max_length=200,null=True)    
    email=models.CharField(max_length=200,blank=True,null=True)
    mobile=models.CharField(null=True)
    message=models.TextField(null=True)
    add_time = models.DateTimeField(auto_now_add=True)

class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE,related_name='profile')    
    mobile = models.CharField(max_length=15,null=True,unique=True) 
    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created and not hasattr(instance, 'profile'):  # Prevent overriding existing profile
            Profile.objects.create(user=instance)

    def __str__(self):
      return f'{self.user}\n{self.mobile}\n{self.user.id}'
        
class Career(models.Model):
    full_name = models.CharField(max_length=200,null=True)  
    email= models.CharField(max_length=200,null=True) 
    mobile = models.CharField(null=True) 
    message = models.TextField(null=True)
    update_cv=models.FileField(upload_to='cv_file/')
    add_time=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_clean
class Banner(models.Model):
    title=models.CharField(max_length=200,null=True)  
    image=models.ImageField(upload_to='banner_img/') 
    
    def __str__(self):
        return self.title
    class Meta:
        db_table = "banners"
    
class ControlPanel(models.Model):
    logo = models.ImageField(upload_to='logo_img/')     