from rest_framework import serializers
from .models import *

class AnnonceImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = "__all__"
class AdresseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Adresse
        fields = "__all__"
class AnnonceSerializer(serializers.ModelSerializer):
    adresse=AdresseSerializer(many=False,read_only=True)
    images =  AnnonceImageSerializer(many=True, read_only=True)
    uploaded_images = serializers.ListField(
        child=serializers.ImageField(allow_empty_file=False, use_url=False),
        write_only=True
    )
    class Meta:
        model = Annonce
        fields = ('id', 'created_at', 'title','text', 'vendu', 'categ', 'description', 'surface', 'price','type','adresse',"images",
                  'uploaded_images')

    
    def create(self, validated_data):
        print(validated_data)
        uploaded_images = validated_data.pop("uploaded_images") 
        validated_data['userId'] = self.context['request'].user
        annonce = Annonce.objects.create(**validated_data)

        for image in uploaded_images:
            Photo.objects.create(annonce=annonce, upload=image)

        return annonce

class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ["first_name","last_name","email"]

