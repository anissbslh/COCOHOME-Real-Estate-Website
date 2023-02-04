from rest_framework import serializers
from .models import *

class AnnonceSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Annonce
        fields = ('id','created_at','title',
            'text', 'vendu',
            'categ',
            'description',
            'surface',
            'price', 'type',
            'pic',
            'wilaya',
            'commune',
            'adresse')

class UserSerializer(serializers.ModelSerializer) :
    class Meta :
        model = User
        fields = ('userId','first_name',
            'last_name',
            'email'
           )

#test
#test