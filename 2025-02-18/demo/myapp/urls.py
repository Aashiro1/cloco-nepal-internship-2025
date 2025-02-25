from django.urls import path
from . import views  # Ensure views.py exists in myapp

urlpatterns = [
    path('', views.index, name='index'),  # Ensure 'index' exists in views.py
]
