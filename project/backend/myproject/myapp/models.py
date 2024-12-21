from django.db import models

class TbPlayers(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(db_column='Name', max_length=50, blank=True, null=True)  
    club = models.CharField(db_column='Club', max_length=50, blank=True, null=True)  
    birth_year = models.IntegerField(db_column='AnneeNaissance', blank=True, null=True)  

    class Meta:
        managed = True # Pour pouvoir y apporter des modifs via des querysets
        db_table = 'tb_players'
