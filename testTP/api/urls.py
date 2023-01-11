from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from django.urls import re_path as url

urlpatterns = [
    #path('', views.index, name="index"),
    #path('success',views.success, name="success")
    url(r'^annonce$',views.AnnonceApi),
    url(r'^annonce/([0-9]+)$',views.AnnonceApi) 
]

