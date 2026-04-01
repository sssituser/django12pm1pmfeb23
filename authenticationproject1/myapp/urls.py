from django.urls import path
from myapp import views

urlpatterns=[
    path('',views.home,name='home'),
    path('java/',views.java,name='java'),
    path('python/',views.python,name='python'),
    path('ui/',views.ui,name = 'ui'),
    path('logout/',views.logout_view,name='logout'),
    path('register/',views.register,name='register'),
]