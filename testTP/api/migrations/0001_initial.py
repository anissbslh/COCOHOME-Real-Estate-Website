# Generated by Django 4.1.5 on 2023-01-09 23:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Annonce',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('title', models.CharField(default='', max_length=50)),
                ('text', models.TextField(default='')),
                ('vendu', models.BooleanField(default=False)),
                ('categ', models.CharField(choices=[('vente', 'Vente'), ('echange', 'Echange'), ('location', 'Location'), ('location_vac', 'Location Vacances')], default=None, max_length=15)),
                ('description', models.TextField(default='')),
                ('surface', models.PositiveIntegerField()),
                ('price', models.PositiveIntegerField()),
                ('type', models.CharField(choices=[('terrain', 'Terrain'), ('bungalow', 'Bungalow'), ('appartement', 'Appartement'), ('maison', 'Maison'), ('terrain_Agricole', 'Terrain Agricole')], default=None, max_length=30)),
                ('pic', models.ImageField(default='', upload_to='images/')),
                ('wilaya', models.CharField(default='', max_length=60)),
                ('commune', models.TextField(default='')),
                ('adresse', models.TextField(default='')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=255, verbose_name='First name')),
                ('last_name', models.CharField(max_length=255, verbose_name='Last name')),
                ('email', models.EmailField(max_length=254)),
            ],
        ),
    ]
