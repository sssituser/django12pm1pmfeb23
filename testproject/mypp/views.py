from django.shortcuts import render
from django.views.generic import CreateView
from mypp.models import User
# Create your views here.
class AddUser(CreateView):
    model = User
    fields = ["fullname","username","email","password"]