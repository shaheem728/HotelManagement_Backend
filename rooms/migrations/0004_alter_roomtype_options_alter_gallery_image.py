# Generated by Django 5.1.3 on 2024-11-28 17:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rooms', '0003_booking_status_roomtype_per_day_charges_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='roomtype',
            options={'ordering': ['title']},
        ),
        migrations.AlterField(
            model_name='gallery',
            name='image',
            field=models.ImageField(upload_to='gallery_image/'),
        ),
    ]
