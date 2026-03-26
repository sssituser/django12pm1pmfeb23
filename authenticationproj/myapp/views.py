from django.shortcuts import render
from django.contrib.auth.decorators import *
from myapp.forms import SignUpForm
# Create your views here.
def home(request):
    return render(request,'myapp/home.html')

from django.http import HttpResponseRedirect
def signup(request):
    form = SignUpForm()
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        user=form.save()
        user.set_password(user.password)
        user.save()
        return HttpResponseRedirect('/accounts/login')
    return render(request,'myapp/signup.html',{'form':form})

        
        


@login_required
def javaexam(request):
    return render(request,'myapp/javaexam.html')

@login_required
def pythonexam(request):
    return render(request,'myapp/pythonexam.html')


def uiexam(request):
    return render(request,'myapp/uiexam.html')
