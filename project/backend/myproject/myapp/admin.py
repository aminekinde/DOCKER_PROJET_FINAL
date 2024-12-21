from django.contrib import admin
from .models import TbPlayers

# Register your models here.
@admin.register(TbPlayers)
class PlayerAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'club', 'birth_year')