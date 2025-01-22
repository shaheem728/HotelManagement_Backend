from django.urls import path
from . import views
urlpatterns = [
    path('room-types/',views.RoomTypeListView.as_view()),
    path('gallery/',views.GalleryListView.as_view()),
    path('room-types/<str:uuid>',views.RoomTypeDetailView.as_view()),
    path('booking/',views.BookingCreateView.as_view()),
    path('recent-booking/<int:user_id>/',views.RecentBookingView.as_view()),
    path('my-booking/<int:user_id>/',views.MyBookingView.as_view()),
    path('delete-booking/<int:pk>/',views.DeleteBookingView.as_view()),
    path('rooms/<str:uuid>/',views.RoomsListView.as_view()),
    path('invoice/<str:uuid>/',views.InvoiceDetailView.as_view()),
]
