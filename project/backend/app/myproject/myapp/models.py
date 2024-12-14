# Pour éviter que Django essaie de créer une nouvelle table, 
# tu peux dire à Django d'utiliser cette table existante en ajoutant l'option db_table dans ton modèle. 
# Cela indique à Django de faire correspondre ton modèle avec la table existante dans la base de données.
# Voici comment modifier ton modèle pour lier ta table existante à ton modèle

from django.db import models

class Player(models.Model):
    name = models.CharField(max_length=100)
    club = models.CharField(max_length=100)
    year_of_birth = models.IntegerField()

    class Meta:
        db_table = 'tb_docker_projet_final'  # Nom de ta table dans MySQL

    def __str__(self):
        return self.name

