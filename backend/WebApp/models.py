from django.db import models
from enum import Enum


class AnnonceCategorieChoices(Enum):
    VENTE = 'vente'
    ECHANGE = 'echange'
    LOCATION = 'location'
    LOCATION_VANCANCES = 'location pour vacances'

class AnnonceTypeDuBienChoices(Enum):
    TERRAIN = 'terrain'
    TERRAIN_AGRICOLE = 'terrain agricole'
    APPARTEMENT = 'appartement'
    MAISON = 'maison'
    BUNGALOW = 'bungalow'
# Create your models here.

class Annonce(models.Model):

    AnonnceId = models.AutoField(primary_key=True)
    AnnonceCategorie = models.
