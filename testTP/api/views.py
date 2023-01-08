from django.shortcuts import render, redirect
from .forms import *
from django.http import HttpResponse
# Create your views here.
def index(request) : 
    return render(request,'index.html')

def add(request):
    if request.method == 'POST':
        form = AnnonceForm(request.POST)
    if form.is_valid():

      new_title = form.cleaned_data['title']
      new_text = form.cleaned_data['text']
      new_categ = form.cleaned_data['categ']
      new_description = form.cleaned_data['description']
      new_surface = form.cleaned_data['surface']
      new_price = form.cleaned_data['price']
      new_pic = form.cleaned_data['pic']
      new_wilaya = form.cleaned_data['wilaya']
      new_commune = form.cleaned_data['commune']
      new_adresse = form.cleaned_data['adresse']

      new_annonce = annonce(
        title = new_title,
        text = new_text,
        categ = new_categ,
        description = new_description,
        surface = new_surface,
        price = new_price,
        pic = new_pic,
        wilaya = new_wilaya,
        commune = new_commune,
        adresse = new_adresse,
      )
      new_annonce.save()
      return redirect('success')
    else:
        form = AnnonceForm()
    return render(request, 'index.html', {
        'form': AnnonceForm()
  })

def success(request):
    return HttpResponse('successfully added')