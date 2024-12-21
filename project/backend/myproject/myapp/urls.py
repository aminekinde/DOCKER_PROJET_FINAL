from django.urls import path
from . import views

# http://127.0.0.1:8000/myapp/players executera la vue nommée get_players dans views.py
urlpatterns = [
    path('myapp', views.welcome_msg, name='welcome_msg'),
    path('myapp/players', views.get_players, name='get_players'),
    path('myapp/players/add/', views.add_player, name='add_player'),  # POST pour ajouter un joueur
    path('myapp/players/<int:player_id>/update/', views.update_player, name='update_player'),  # PUT pour modifier un joueur
    path('myapp/players/<int:player_id>/delete/', views.delete_player, name='delete_player'),  # DELETE pour supprimer un joueur
]

