from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello, ZA WARUDO!")

def about(request):
    return HttpResponse("aBOUt Us")