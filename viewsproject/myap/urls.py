from django.urls import path

from myap import views

urlpatterns = [
    path('',views.home),
    path('reg/',views.register),
    path('log/',views.login),
    path('about/',views.about),
]

