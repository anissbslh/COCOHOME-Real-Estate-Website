from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.

class annonce(models.Model):


        TYPE_CHOICES = [
                ('terrain', 'Terrain'),
                ('bungalow', 'Bungalow'),
                ('appartement', 'Appartement'),
                ('maison', 'Maison'),
                ('terrain_Agricole', 'Terrain Agricole'),
                ]

                              
        CATEGORY_CHOICES = [
                ('vente', 'Vente'),
                ('echange', 'Echange'),
                ('location', 'Location'),
                ('location_vac', 'Location Vacances'),
        ]

        id = models.IntegerField(primary_key=True)
        created_at = models.DateTimeField(auto_now_add=True)
        title = models.CharField(max_length=50, default='')
        text = models.TextField(default='')
        vendu = models.BooleanField(null = False, default=False)
        categ = models.CharField(max_length=15,choices=CATEGORY_CHOICES,default=None )
        description = models.TextField(default="")
        surface = models.PositiveIntegerField()
        price = models.PositiveIntegerField()
        type = models.CharField(max_length=30,choices=TYPE_CHOICES, default=None)
        pic = models.ImageField(upload_to='images/',default="")
        wilaya = models.CharField(max_length=60,default='')
        commune = models.TextField(default="")
        adresse = models.TextField(default="")



class User(models.Model):
	first_name = models.CharField("First name", max_length=255)
	last_name = models.CharField("Last name", max_length=255)
	email = models.EmailField()
        
	def __str__(self):
		return self.first_name
   
    