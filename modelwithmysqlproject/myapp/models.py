from django.db import models

# Create your models here.
class Employee(models.Model):
    EmpId = models.IntegerField()
    EmpName = models.CharField(max_length=30)
    EmpSal = models.DecimalField(max_digits=12,decimal_places=2)
