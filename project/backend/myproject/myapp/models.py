from django.db import models

class TbPlayers(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(db_column='Name', max_length=50, blank=True, null=True)  
    club = models.CharField(db_column='Club', max_length=50, blank=True, null=True)  
    birth_year = models.IntegerField(db_column='AnneeNaissance', blank=True, null=True)  

    class Meta:
        managed = False 
        db_table = 'tb_players'

# managed=False va empêcher Django de créer/recréer ou modifier la structure même de la table même si on fait des migrations, 
# mais permettre de gérer les données.
# Ex : On ne pourra pas supprimer la tb elle-même ou même une colonne mais on pourra requêter des données ou même rajouter/modifier des lignes
