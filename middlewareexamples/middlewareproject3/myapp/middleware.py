from django.http import HttpResponse
class AppMaintainceMiddleWare(object):
    def __init__(self,get_response):
        self.get_response=get_response
        
    def __call__(self,request):
        respose=self.get_response(request)
        return HttpResponse("<h1 style='color:red'>This application is Under maintaince, It will revoked on APRIL/2026</h1>")