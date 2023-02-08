from django.db import models
from comptes.models import User
from django.utils import timezone

from django.conf import settings
from django.utils.translation import gettext_lazy as _


def upload_to(instance, filename):
    return 'annonces/{filename}'.format(filename=filename)

class Annonce(models.Model):


    class AnnonceObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset()

    annonceId = models.AutoField(primary_key=True, serialize=False)
    titre = models.CharField(max_length=200, default='')
    description = models.TextField()

    categorie = models.CharField(max_length=50, default='')
    typeDuBien = models.CharField(max_length=50, default='')

    surface = models.PositiveIntegerField()
    prix = models.PositiveIntegerField()

    adresse = models.CharField(max_length=100, default='')
    wilaya = models.CharField(max_length=100, default='')
    commune = models.CharField(max_length=100, default='')

    dateDePublication = models.DateTimeField(default=timezone.now)

    image = models.ImageField(_("Image"), upload_to=upload_to, default='Villa.jpg')

    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='annonce_posts')

    objects = models.Manager()
    annonceObjects = AnnonceObjects()

    class Meta:
        ordering = ('-dateDePublication',)

    def __str__(self):
        return self.titre