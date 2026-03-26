from django.urls import path
from mypp import views

urlpatterns =[
    path("",views.AddUser.as_view()),
    
]
