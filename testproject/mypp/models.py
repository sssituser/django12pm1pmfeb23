from PyPDF2 import PasswordType
from django.db import models

# Create your models here.
class User(models.Model):
    fullname = models.CharField(max_length=20)
    username = models.CharField(max_length=20)
    email = models.EmailField()
    password=models.CharField(max_length=10)