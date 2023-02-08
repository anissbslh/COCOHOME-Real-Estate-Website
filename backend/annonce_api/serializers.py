from rest_framework import serializers
from annonce.models import Annonce

class AnnonceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Annonce
        fields = ('annonceId', 'titre', 'description', 'categorie', 'typeDuBien',
        'surface', 'prix', 'adresse', 'wilaya', 'commune', 'dateDePublication','image', 'user')