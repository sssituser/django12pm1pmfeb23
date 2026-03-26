from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def home(request):
    return HttpResponse("<h2 style='text-align:center;color:darkmagenta'>Home Page</h2><br/><input type='text' placeholder='Enter Name'/>")