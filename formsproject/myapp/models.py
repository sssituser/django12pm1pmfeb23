from django.db import models

# Create your models here.
class Studentt(models.Model):
    StuId = models.IntegerField()
    StuName = models.CharField(max_length=30)
    StuMarks = models.IntegerField()
