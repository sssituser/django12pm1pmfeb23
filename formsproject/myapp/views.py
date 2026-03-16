from django.shortcuts import render,redirect,get_object_or_404
from myapp.forms import StudentForm
from myapp.models import Studentt
# Create your views here.

def registerStudent(request):
    form=StudentForm()
    if request.method == 'POST':
        form = StudentForm(request.POST)
        if form.is_valid():            
            form.save(commit=True)
            return redirect('/')
    return render(request,'myapp/register.html',{'form':form})

def getStudents(request):
    students = Studentt.objects.all()
    return render(request,'myapp/students.html',{'studs':students})

def getStudent(request,id):
    student = get_object_or_404(Studentt,id=id)
    return render(request,'myapp/find.html',{'student':student})

def editStudent(request,id):
    student = Studentt.objects.get(pk=id)
    form = StudentForm(instance=student)
    if request.method=='POST':
        form = StudentForm(request.POST,instance=student)
        if form.is_valid():
            form.save()
            return redirect("/")
    return render(request,'myapp/edit.html',{'form':form})

def deleteStudent(request,id):
    student = get_object_or_404(Studentt,id=id)
    if request.method=='POST':
        student.delete()
        return redirect('/')
    return render(request,'myapp/delete.html',{'student':student})