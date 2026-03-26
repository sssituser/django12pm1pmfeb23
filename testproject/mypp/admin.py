from django.contrib import admin
from mypp.models import User

# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display=["fullname","username","email","password"]
admin.site.register(User,UserAdmin)
