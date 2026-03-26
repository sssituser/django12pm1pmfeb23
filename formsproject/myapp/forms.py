from django import forms
from myapp.models import Studentt

class StudentForm(forms.ModelForm):
    StuId = forms.IntegerField()
    StuName = forms.CharField(widget=forms.PasswordInput, max_length=30)
    StuMarks = forms.IntegerField()
    class Meta:
        model = Studentt
        fields ='__all__'