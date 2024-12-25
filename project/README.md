**Amine KINDE**
Repo github : https://github.com/aminekinde/DOCKER_PROJET_FINAL.git

1) Une fois le _repo cloné, 
2) Vérifiez bien que les ports 3007, 3001 et 8001 de votre machine hôte sont libres
   Car j'y redirige respectivement les services de base de données, frontend et backend.

   Je vous conseille aussi de pruner vos services ainsi que vos volumes qui peuvent avoir le même nom que le mien :
   _docker system prune -a_
   _docker volume prune_

3) Buildez les images puis lancez les conteneurs : _docker-compose up --build_
4) J'ai expréssement mis des healthcheck aux services db et backend puis instauré des dépendances
   entre : 
          db et backend
          frontend et backend
   Ceci dit, attendez que ces checks se finalisent : _frontend-container  | You can now view frontend in the browser._
5) Lancez l'application dans le navigateur : 
   backend : http://localhost:8001/myapp/players  
   front   : http://localhost:3001


   <u>__spécifications__</u>
- La dernière colonne à droite contient des boutons "modifier" et "supprimer" permettant de modifier n'importe laquelle des infos sur un joueur(PUT) ou de le supprimer (DELETE) - (avec message de confirmation)
- Bonnes pratiques de sécurité 
  J'ai créé des fichiers de conf .env et .docker-env contenant mes variables d'environnement sensibles notamment les infos de connexion à la base de données.

<u>__Outils utilisés__</u>
Backend : Django (Python)
Frontend : React (JavaScript)
BDD : MYSQL
HTTP REQUEST Debug : Postman
GIT : Source Code Management

--------------------------------------------------- Enjoy ! --------------------------------------------------- 
