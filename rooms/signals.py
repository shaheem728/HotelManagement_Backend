import time
from django.db.models.signals import post_save
from django.dispatch import receiver

from rooms.models import Booking,Invoice
# @receiver(post_save,sender=Booking)
# def create_invoice(instance,created,**kwargs):
#     if created:
#         invoice_number=f'INV--({instance.id})-{int(time.time())}'
#         Invoice.objects.create(invoice_number=invoice_number,booking=instance)
