from django.contrib import admin
from . import models

@admin.register(models.Annonce)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('titre', 'annonceId', 'user', 'categorie')
    prepopulated_fields = {'annonceId' : ('titre',), }

