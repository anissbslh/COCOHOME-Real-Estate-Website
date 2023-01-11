from django import forms
from .models import annonce

class AnnonceForm(forms.ModelForm):
    class Meta:
        model = annonce
        fields = [
            'title',
            'text',
            'categ',
            'description',
            'surface',
            'price',
            'pic',
            'wilaya',
            'commune',
            'adresse',
        ]
        labels = {
            'title' : 'Titre de l''annonce ',
            'text': 'Texte  ',
            'categ': 'Catégorie ',
            'description':'Description ',
            'surface': 'Surface du bien',
            'price':'Prix du bien ',
            'pic':'Photo du bien ',
            'wilaya': 'Wilaya',
            'commune':'Commune ',
            'adresse': 'Adresse ',
        }
        


