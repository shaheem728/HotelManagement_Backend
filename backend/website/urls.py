from django.urls import path
from . import views
urlpatterns = [
    path('banner/', views.BannerList.as_view()),
    path('signup/',views.UserCreateView.as_view()),
    path('login/',views.UserLoginView.as_view()),
    path('mobile-validate/',views.mobileValidateView.as_view()),
    path('otp-validate/',views.OTPValidateView.as_view()),
    path('change-password/',views.ChangePasswordView.as_view()),
]
