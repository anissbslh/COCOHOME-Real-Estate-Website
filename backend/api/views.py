from rest_framework import generics,permissions,status
from .models import Annonce,Adresse, User
from .serializers import AnnonceSerializer,UserSerializer,AdresseSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response
#from .webscraper.scrap import scrape_by_domain


class OneUser(generics.RetrieveAPIView):
    """
    La vue OneUser implémente une fonctionnalité de récupération d'un seul utilisateur, en utilisant le modèle User de Django. La classe UserSerializer est utilisée pour sérialiser les données 
    de l'utilisateur récupéré afin de les renvoyer dans une réponse HTTP appropriée.
    
    l'attribut *queryset* est utilisé pour définir la source des données pour la vue. 
    Dans ce cas, le queryset définit l'ensemble de tous les objets *User* de la base de données.

    :param: "RetrieveAPIView" est utilisée pour récupérer un objet unique
    à partir de la base de données et le renvoyer en réponse à une requête HTTP.

    La classe UserSerializer est utilisée pour sérialiser les données de l'utilisateur récupéré 
    afin de les renvoyer dans une réponse HTTP appropriée.

    """
  
    permission_classes=[permissions.IsAuthenticated]

    serializer_class=UserSerializer
    queryset = User.objects.all() 

class Myprofile(generics.RetrieveUpdateAPIView):
  """
  Cette vue permet à un utilisateur authentifié de 
  consulter les données de son propre profil et de les mettre à jour.
  """
  permission_classes=[permissions.IsAuthenticated]
  serializer_class = UserSerializer
  def get(self, request):
        """Définit la méthode HTTP GET pour cette vue. 
         Elle crée un objet sérialiseur en utilisant UserSerializer avec l'objet d'utilisateur actuel (récupéré à partir de request.user)
         :return: la réponse serialisée sous forme de données JSON.
        """
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
  def get_object(self):
        """
        :return: self.request.user, ce qui signifie que l'objet utilisateur actuel sera utilisé pour cette vue.        """
        return self.request.user

class AnnonceList(generics.ListCreateAPIView):
    """
    Cette classe hérite de `generics.ListCreateAPIView` de Django REST framework et permet de lister et de créer des annonces.
    
    Attributs :
    - permission_classes (list) : liste des classes de permission qui seront utilisées pour autoriser ou non l'accès à l'API.
    - queryset (QuerySet) : ensemble des objets Annonce.
    - serializer_class (Serializer) : classe de serializer qui sera utilisée pour convertir les données d'objet en format JSON et vice-versa.
    
    Méthodes :
    - perform_create(serializer) : méthode exécutée lors de la création d'une nouvelle annonce. Elle ajoute l'utilisateur qui a publié l'annonce et l'adresse de l'annonce.
    """
    permission_classes=[permissions.IsAuthenticatedOrReadOnly]
    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer
    
    def perform_create(self, serializer):
        """
        Ajoute l'utilisateur qui a publié l'annonce et l'adresse de cette annonce.
        
        Arguments :
        - serializer (Serializer) : instance de la classe de serializer qui sera utilisée pour convertir les données d'objet en format JSON et vice-versa.
        """
        adresse_id = self.request.data.get('adresse')
        adresse = Adresse.objects.get(id=adresse_id)
        serializer.save(annoncer=self.request.user,adresse=adresse)


class AnnonceDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Cette classe gère les détails d'une annonce spécifique.
    Elle hérite de la classe `generics.RetrieveUpdateDestroyAPIView` de Django REST framework. Cette classe est utilisée pour récupérer, mettre à jour ou supprimer une annonce existante.

    Attributs:
        permission_classes (list): Liste de permissions nécessaires pour accéder à cette vue. Les utilisateurs authentifiés ou non authentifiés peuvent accéder à cette vue.
        queryset (QuerySet): Ensemble de toutes les annonces.
        serializer_class (AnnonceSerializer): Classe de serialization utilisée pour sérialiser les données de l'annonce.
    """
    permission_classes=[permissions.IsAuthenticatedOrReadOnly]
    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer



class MyAnnonces(generics.ListAPIView):
    """
    Cette classe hérite de `generics.ListAPIView` et permet de récupérer la liste des annonces créées par l'utilisateur connecté.

    Attributs :
        permission_classes (list) : Liste des permissions nécessaires pour accéder à cette vue.
        queryset (QuerySet) : Ensemble d'objets à afficher.
        serializer_class (AnnonceSerializer) : Classe de sérialisation à utiliser pour sérialiser les objets.

    Méthodes :
        get_queryset (self) : Retourne la liste des annonces créées par l'utilisateur connecté.
    """
    permission_classes=[permissions.IsAuthenticated]
    serializer_class=AnnonceSerializer

    def get_queryset(self):
        """
        Cette méthode retourne la liste des annonces créées par l'utilisateur connecté.

        Returns :
            QuerySet : Ensemble d'objets à afficher.
        """
        user = self.request.user
        return Annonce.objects.filter(annoncer=user.id)



#class AnnonceSearch(generics.ListAPIView):
#   permission_classes=[permissions.AllowAny]
#    queryset = Annonce.objects.all()
#    serializer_class = AnnonceSerializer
#    filter_backends=[DjangoFilterBackend]
#    search_fields=('adresse__Commune','' 'adresse__wilaya', 'title', 'category','type', 'surface', 'description', 'tarif','created_at')
#    filterset_fields=['adresse__Commune', 'adresse__wilaya', 'title', 'category','type', 'surface', 'description', 'tarif','created_at']

    
class AddAdresse(generics.CreateAPIView):
    """
    Cette classe hérite de la classe `generics.CreateAPIView` de Django REST framework. Elle permet de créer une instance de l'objet `Adresse`.

    Attributs :
        permission_classes (list) : Contient une liste d'instances de la classe `permissions.IsAuthenticated` qui indique que seul un utilisateur authentifié peut effectuer l'opération de création.
        queryset (QuerySet) : Représente un ensemble d'objets `Adresse` récupérés à partir de la base de données.
        serializer_class (AdresseSerializer) : Classe qui permet de serialiser et désérialiser les objets `Adresse`.
    """
    permission_classes=[permissions.IsAuthenticated]
    queryset=Adresse.objects.all()
    serializer_class=AdresseSerializer
