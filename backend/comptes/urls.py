from django.urls import path
from .views import*

urlpatterns = [
    path('google/', GoogleSocialAuthView.as_view()),
    path('comptes/<str:email>', CompteDetail.as_view(), name='detailcreate'),
]
