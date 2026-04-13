from django.db import models

# Create your models here.
class Product(models.Model):
    prodid = models.IntegerField(unique=True)
    prodname = models.CharField(max_length=30)
    prodprice = models.DecimalField(max_digits=8,decimal_places=2)