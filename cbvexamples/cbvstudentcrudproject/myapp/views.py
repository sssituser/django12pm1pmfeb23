from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import ListView,CreateView,UpdateView,DeleteView,DetailView
from myapp.models import Student
# Create your views here.
class StudentList(ListView):
    model = Student
    fields= '__all__'

class CreateStudent(CreateView):
    model = Student
    fields = '__all__'

class UpdateStudent(UpdateView):
    model = Student
    fields = ["StudentId","StudentName","StudentMarks"]

class StudentDetails(DetailView):
    model = Student

class DeleteStudent(DeleteView):
    model = Student 
    success_url = reverse_lazy('list')   
    

