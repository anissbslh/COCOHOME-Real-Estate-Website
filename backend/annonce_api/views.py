from rest_framework import generics
from annonce.models import Annonce
from .serializers import AnnonceSerializer
from rest_framework import viewsets
from rest_framework import filters
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser





# class AnnonceList(viewsets.ModelViewSet):

#     serializer_class = AnnonceSerializer

#     # def get_object(self, queryset=None, **kwargs):
#     #     item = self.kwargs.get('pk')
#     #     return get_object_or_404(Annonce, pk = item)

#     def get_object(self, queryset=None, **kwargs):
#         item = self.kwargs.get('pk')
#         return get_object_or_404(Annonce ,annonceId=item)

#     def get_queryset(self):
#         return Annonce.objects.all()


class AnnonceList(generics.ListAPIView):
    serializer_class = AnnonceSerializer
    queryset = Annonce.objects.all()


class AnnonceDetail(generics.RetrieveAPIView):
    serializer_class = AnnonceSerializer

    def get_object(self, queryset = None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(Annonce, pk=item)


class AnnonceListDetailfilter(generics.ListAPIView):

    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer
    filter_backends = [filters.SearchFilter] 
    search_fields = ['^description']

    # '^' Starts-with search.
    # '=' Exact matches.
    # '@' Full-text search. (Currently only supported Django's PostgreSQL backend.)
    # '$' Regex search.


class AnnonceSearch(generics.ListAPIView):
    
    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['^slug']

class CreateAnnonce(APIView):

    parser_classes = [MultiPartParser, FormParser]
    def post(self, request, format=None):
        print(request.data)
        serializer = AnnonceSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class CreateAnnonce(APIView):
#      queryset = Annonce.objects.all()
#      serializer_class = AnnonceSerializer

class AdminAnnonceDetail(generics.UpdateAPIView):
    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer

class EditAnnonce(generics.UpdateAPIView):
    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer

class DeleteAnnonce(generics.RetrieveDestroyAPIView):
    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer


# class AnnonceList(viewsets.ViewSet):
#     queryset = Annonce.annonceObjects.all()

#     def list(self, request):
#         serializer_class = AnnonceSerializer(self.queryset, many = True)
#         return Response(serializer_class.data)


#     def retrieve(self, request, pk = None):
#         annonce = get_object_or_404(self.queryset, pk=pk)
#         serializer_class = AnnonceSerializer(annonce)
#         return Response(serializer_class.data)

    




# class AnnonceList(generics.ListCreateAPIView):
#     queryset = Annonce.annonceObjects.all()
#     serializer_class = AnnonceSerializer


# class AnnonceDetail(generics.RetrieveDestroyAPIView):
#     queryset = Annonce.objects.all()
#     serializer_class = AnnonceSerializer