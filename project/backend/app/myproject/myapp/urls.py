from django.urls import path
from . import views

urlpatterns = [
    path('myapp/players/', views.player_list, name='players'),
]