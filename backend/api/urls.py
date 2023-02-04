from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
     path('annonce/<int:pk>/', AnnonceDetail.as_view(), name='annonce-detail'),
    path('', AnnonceList.as_view(), name='annonce-list'),
    path('myprofile', Myprofile.as_view(), name='profile'),
    path('myannonces/',MyAnnonces.as_view(), name='myAnnonces'),
    path('addadresse/',AddAdresse.as_view(), name='create-adresse'),
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT )

