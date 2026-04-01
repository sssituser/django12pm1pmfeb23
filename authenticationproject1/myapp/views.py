from django.shortcuts import render,redirect
from  django.contrib.auth.decorators import *
# Create your views here.

def home(request):
    return render(request,'myapp/home.html')

@login_required
def java(request):
    return render(request,'myapp/java.html')

@login_required
def python(request):
    return render(request,'myapp/python.html')

@login_required
def ui(request):
    return render(request,'myapp/ui.html')

from django.contrib.auth import logout
def logout_view(request):
    logout(request)
    return redirect('/accounts/login')
    
from myapp.forms import RegistrationForm
from django.http import HttpResponseRedirect

def register(request):
    form = RegistrationForm()
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        user=form.save()
        user.set_password(user.password)
        user.save()
        return HttpResponseRedirect('/accounts/login')
    return render(request,'myapp/register.html',{'form':form})



