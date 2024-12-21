from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import TbPlayers
from django.views.decorators.csrf import csrf_exempt
import json

def welcome_msg(request):
    return HttpResponse("Welcome to Amine's Website lovely coded with Django!")

# Vue pour obtenir tous les joueurs
def get_players(request):
    players = TbPlayers.objects.all()
    players_data = list(players.values('id', 'name', 'club', 'birth_year'))
    return JsonResponse(players_data, safe=False)

# Vue pour ajouter un joueur
@csrf_exempt
def add_player(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            print("Données reçues:", data)  # Debugging
            name = data.get('name') 
            club = data.get('club') 
            birth_year = int(data.get('birth_year')) if data.get('birth_year') else None

            if not name or not club or not birth_year:
                return JsonResponse({'error': 'Tous les champs sont requis'}, status=400)

            player = TbPlayers.objects.create(
                name=name,
                club=club,
                birth_year=birth_year
            )
            return JsonResponse({'id': player.id, 'name': player.name, 'club': player.club, 'birth_year': player.birth_year}, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=405)

# Vue pour modifier un joueur
@csrf_exempt
def update_player(request, player_id):
    if request.method == 'PUT':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            club = data.get('club')
            birth_year = data.get('birth_year')

            player = TbPlayers.objects.get(id=player_id)

            # Mise à jour des champs
            player.name = name
            player.club = club
            player.birth_year = birth_year
            player.save()

            # Retourner le joueur mis à jour
            return JsonResponse({
                'id': player.id,
                'name': player.name,
                'club': player.club,
                'birth_year': player.birth_year
            })

        except TbPlayers.DoesNotExist:
            return JsonResponse({'error': 'Player not found'}, status=404)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=400)

# Vue pour supprimer un joueur
@csrf_exempt
def delete_player(request, player_id):
    if request.method == 'DELETE':
        try:
            player = TbPlayers.objects.get(id=player_id)
            player.delete()
            return JsonResponse({'message': 'Player deleted successfully'}, status=204)

        except TbPlayers.DoesNotExist:
            return JsonResponse({'error': 'Player not found'}, status=404)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=400)
