from django.db import models

# Create your models here.
class Student(models.Model):
    StuId = models.IntegerField()
    StuName = models.CharField(max_length=30)
    StuMarks = models.IntegerField()