from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from django.urls import re_path as url

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    #path('', views.index, name="index"),
    #path('success',views.success, name="success")
    url(r'^annonce$',views.AnnonceApi),
    url(r'^annonce/([0-9]+)$',views.AnnonceApi),
    url(r'^user$', views.UserApi),
    url(r'^user/([0-9]+)$', views.UserApi),
    url(r'^user/savefile', views.UserApi) 
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT )

