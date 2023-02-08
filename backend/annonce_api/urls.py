from .views import AnnonceList, AnnonceDetail, AnnonceSearch, AnnonceListDetailfilter, CreateAnnonce, EditAnnonce, DeleteAnnonce, AdminAnnonceDetail
#from rest_framework.routers import DefaultRouter
from django.urls import path

app_name = 'blog_api'

# router = DefaultRouter()
# router.register('', PostList, basename='post')
# urlpatterns = router.urls

urlpatterns = [
    path('annonces/<int:pk>', AnnonceDetail.as_view(), name='detailcreate'),
    path('search/', AnnonceListDetailfilter.as_view(), name='postsearch'),
    path('annonces/', AnnonceList.as_view(), name='listcreate'),

    path('admin/create', CreateAnnonce.as_view(), name='createannonce'),
    path('admin/edit/annoncedetail/<int:pk>', AdminAnnonceDetail.as_view(), name='admindetailannonce'),
    path('admin/edit/<int:pk>', EditAnnonce.as_view(), name='editannonce'),
    path('admin/delete/<int:pk>', DeleteAnnonce.as_view(), name='deleteannonce')
    
]