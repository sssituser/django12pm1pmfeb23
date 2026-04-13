from django.shortcuts import render
from rest_framework import viewsets
from studentapp.models import Student
from studentapp.serilizers import StudentSerilizer
# Create your views here.

class StudentViewSet(viewsets.ModelViewSet):
        queryset = Student.objects.all()
        serializer_class = StudentSerilizer
           
