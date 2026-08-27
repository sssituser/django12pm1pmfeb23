from django.shortcuts import render
from rest_framework import viewsets
from myapp.serializers import ProductSerializer
from myapp.models import Product
# Create your views here.
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
