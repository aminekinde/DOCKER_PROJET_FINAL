# Utiliser l'image officielle de MySQL
FROM mysql:8.0

# Copier le fichier init.sql dans le répertoire approprié pour l'initialisation
COPY ./init.sql /docker-entrypoint-initdb.d/

# Tout fichier présent dans /docker-entrypoint-initdb.d/ est exécuté au démarrage du conteneur
