from django.urls import path
from myapp import views

urlpatterns=[
    path('',views.getStudents),
    path('register/',views.registerStudent),
    path('find/<int:id>/',views.getStudent),
    path('edit/<int:id>/',views.editStudent),
    path('delete/<int:id>/',views.deleteStudent),
]