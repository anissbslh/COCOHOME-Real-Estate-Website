from django.db import models
from django.utils import timezone

# Create your models here.

class UserManager():
    """
    Cette classe gère la création d'utilisateurs. Elle hérite de `BaseUserManager` 
    et implémente les méthodes `_create_user`, `create_user`, et `create_admin`.
    """

    def _create_user(self, email, is_admin):
        """
        Cette méthode interne crée un utilisateur avec les informations données.
        Si l'adresse email n'est pas fournie, une exception `ValueError` est levée. 
        """
        if not email:
            raise ValueError('Les utilisateurs doivent avoir une adresse email')
        now = timezone.now()
        email = self.normalize_email(email)
        user = self.model(
            email=email,
            is_admin=is_admin,
        )
        user.save(using=self._db)
        return user

    def create_user(self, email, **extra_fields):
        """
        Cette méthode crée un utilisateur normal.
        """
        return self._create_user(email, False,**extra_fields)

    def create_admin(self, email, **extra_fields):
        """
        Cette méthode crée un utilisateur administrateur.
        """
        user=self._create_user(email, True, **extra_fields)
        user.save(using=self._db)
        return user

class User(models.Model):
    """
    Cette classe représente un utilisateur. Elle hérite de `AbstractBaseUser` 
    et `PermissionsMixin` et définit les champs `first_name`, `last_name`, 
    `is_admin`, `email`, et un gestionnaire d'objets `UserManager`.
    """
    first_name = models.CharField(max_length=80, null=True, blank=True)
    last_name = models.CharField(max_length=80, null=True, blank=True)
    is_admin = models.BooleanField(default=False)
    email = models.EmailField(max_length=254, unique=True)

    objects = UserManager

class Adresse(models.Model):
    wilaya = models.CharField(max_length=100)
    Commune = models.CharField(max_length=100)
    latitude = models.DecimalField(
        max_digits=9, decimal_places=6, null=True, blank=True)

    longitude = models.DecimalField(
        max_digits=9, decimal_places=6, null=True, blank=True)

def user_directory_path(instance, filename):

    # file will be uploaded to MEDIA_ROOT / user_<id>/<filename>
    return 'user_{0}/{1}'.format(instance.user.id, filename)


class Annonce(models.Model):

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

    annonceId = models.AutoField(primary_key=True, serialize=False)
    userId = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='user')
    created_at = models.DateTimeField(default=timezone.now)
    title = models.CharField(max_length=100, default='')
    text = models.TextField(default='')
    vendu = models.BooleanField(null=False, default=False)
    categ = models.CharField(
        max_length=15, choices=CATEGORY_CHOICES, default=None)
    surface = models.PositiveIntegerField()
    price = models.PositiveIntegerField()
    type = models.CharField(max_length=30, choices=TYPE_CHOICES, default=None)
    adresse = models.ForeignKey(
        Adresse, on_delete=models.CASCADE, blank=True, null=True)

    class Meta:
        ordering = ('-created_at',)

    def __str__(self):
        return self.userId.email + ' '+self.title[:15]

class Photo(models.Model):
    upload = models.ImageField(upload_to = 'Photos')
    annonce = models.ForeignKey(Annonce,related_name='photos',on_delete=models.CASCADE)


