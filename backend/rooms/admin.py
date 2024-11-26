from django.contrib import admin
from django.utils.safestring import mark_safe
from . import models
# Register your models here.

admin.site.register(models.Room)
admin.site.register(models.Booking)
admin.site.register(models.Payment)
admin.site.register(models.Gallery)
admin.site.register(models.RoomImage)

class RoomImageInline(admin.TabularInline):
    model = models.RoomImage
    extra =1
class RoomTypeAdmin(admin.ModelAdmin):
    inlines = [RoomImageInline]
    search_fields = ['title']

    def first_image(self,obj):
        first_image=obj.room_type_imgs.first()
        return mark_safe('<img src= "%s" width="50"%>'%first_image.img.url)
    first_image.allow_tags = True
admin.site.register(models.RoomType,RoomTypeAdmin)

