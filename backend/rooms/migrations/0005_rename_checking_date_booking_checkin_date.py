# Generated by Django 5.1.3 on 2024-12-04 09:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rooms', '0004_alter_roomtype_options_alter_gallery_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='booking',
            old_name='checking_date',
            new_name='checkin_date',
        ),
    ]
