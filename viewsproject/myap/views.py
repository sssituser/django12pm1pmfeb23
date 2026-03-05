from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def home(request):
    return HttpResponse("<h2 style='text-align:center;color:blue'>Home Page</h2>")

def register(request):
    return HttpResponse("<h2 style='text-align:center;color:blue'>Register Page</h2>")

def login(request):
    return HttpResponse("<h2 style='text-align:center;color:blue'>Login Page</h2>")

def about(request):
    return HttpResponse("<h2 style='text-align:center;color:blue'>About Page</h2>")
    
    
    
    