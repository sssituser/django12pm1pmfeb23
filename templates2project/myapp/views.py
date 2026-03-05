from django.shortcuts import render

# Create your views here.
def home(request):
    dict={"message":"Welcom to Home Page"}
    return render(request,'myapp/home.html',dict)

def register(request):
    dict={"message":"Welcom to Register Page","name":"Arun kumar","subject":"Django","contact":999999,"Address":"KPHB 9TH PHASE"}
    return render(request,'myapp/register.html',dict)

def login(request):
    dict={"message":"Welcom to Logins Page"}
    return render(request,'myapp/login.html',dict)

def about(request):
    dict = {"message":"Welcome to About Page"}
    return render(request,'myapp/about.html',dict)

