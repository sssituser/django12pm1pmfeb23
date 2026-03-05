from django.urls import path
from myapp import views

urlpatterns=[
    path('',views.home),
    path('register/',views.register,name='signup'),
    path('login/',views.login,name='signin'),
    path('about/',views.about,name='about'),
    path('contact',views.contact,name='contact'),
]