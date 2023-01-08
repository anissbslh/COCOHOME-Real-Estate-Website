from rest_framework import serializers
from models import *

class AnnonceSerializer(serializers.ModelSerializer) :
    class META :
        model = annonce
        fields = ('title',
            'text',
            'categ',
            'description',
            'surface',
            'price',
            'pic',
            'wilaya',
            'commune',
            'adresse',)

class UserSerializer(serializers.ModelSerializer) :
    class META :
        model = User
        fields = ('first_name',
            'last_name',
            'email',
           )

