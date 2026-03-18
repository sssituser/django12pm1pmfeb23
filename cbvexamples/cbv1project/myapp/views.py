from django.shortcuts import render
from django.views import View
from django.http import HttpResponse
# Create your views here.
class HelloView(View):
    def get(self,request):
        return HttpResponse("Hi Iam Hello View from class HelloView ")
