from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from .models import *
from .serializers import *
 

# Create your views here.

@csrf_exempt

def AnnonceApi(request, idd=0):
  if request.method == "GET" : 
    annonces = Annonce.objects.all()
    annonces_serializer = AnnonceSerializer(annonces,many = True)
    return JsonResponse(annonces_serializer.data, safe=False)
  elif request.method == "POST":
    annonce_data = JSONParser().parse(request)
    annonces_serializer = AnnonceSerializer(data=annonce_data)
    if annonces_serializer.is_valid():
      annonces_serializer.save()
      return JsonResponse("Ajoutée avec succes",safe = False)
    return JsonResponse("Failed to Add",safe=False)
  elif request.method == "PUT" : 
    annonce_data = JSONParser().parse(request)
    annonce = Annonce.objects.get(id = annonce_data['id'])
    annonces_serializer = AnnonceSerializer(annonce,data=annonce_data)
    if annonces_serializer.is_valid():
      annonces_serializer.save()
      return JsonResponse ("Update Successfully", safe=False)
    return JsonResponse("Failed to update")
  elif request.method == "DELETE":
    annonce = Annonce.objects.get(id = idd)
    annonce.delete()
    return JsonResponse("Deleted Successfully", safe=False)