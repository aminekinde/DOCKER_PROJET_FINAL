# Utiliser l'image officielle de MySQL
FROM mysql:8.0

# copier le fichier init.sql dans le répertoire /docker-entrypoint-initdb.d/ de l'image
# ce fichier sera exécuté lors de la création de la base de données
COPY init.sql /docker-entrypoint-initdb.d/

