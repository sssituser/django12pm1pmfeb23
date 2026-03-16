from django.shortcuts import render
from myapp.models import Employee
# Create your views here.
def getEmployees(request):
    employees = Employee.objects.all()
    return render(request,'myapp/employees.html',{'emps':employees})
    