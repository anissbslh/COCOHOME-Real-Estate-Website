# Generated by Django 4.1.5 on 2023-01-11 08:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_annonce_pic'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='id',
        ),
        migrations.AddField(
            model_name='user',
            name='userId',
            field=models.AutoField(default=0, primary_key=True, serialize=False),
        ),
    ]