from django.shortcuts import render
from django.views import View
from django.http import HttpResponse
# Create your views here.

class MyView(View):
    def get(self,request):
        return HttpResponse('<form mehod="post"><h1>Hi Iam get method from myview</h1><button>submit</button></form>')
    def post(self,request):
        return HttpResponse('<h1>Hi Iam post method from Myview</h1>')
