from django.urls import path
from myapp import views

urlpatterns=[
    path('home/',views.home,name='home'),
    path('java/',views.javaexam,name='java'),
    path('python/',views.pythonexam,name="python"),
    path('ui/',views.uiexam,name='ui'),
    path('signup/',views.signup,name='signup'),
]