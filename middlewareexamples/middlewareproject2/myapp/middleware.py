class ExecutionFlowMiddleware(object):
    
    def __init__(self,get_response):
        print("InitMetod Executed")
        self.get_response=get_response
        
    def __call__(self,request):
        print("Preprocessing of the request")
        response = self.get_response(request)
        print("Post Process of the request or Processing Response")
        return response
                
