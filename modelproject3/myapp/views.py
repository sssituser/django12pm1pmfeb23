from django.shortcuts import render
from myapp.models import Student
# Create your views here.
def getStudents(request):
    students = Student.objects.all()
    return render(request,'myapp/students.html',{'studs':students})