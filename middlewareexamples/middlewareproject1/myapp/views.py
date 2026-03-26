from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def home(request):
    return HttpResponse(f"<h1 style='text-align:center'>Home Function Executed: {10//4}</h1>")
    
