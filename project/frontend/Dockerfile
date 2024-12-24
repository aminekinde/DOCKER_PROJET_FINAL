# Utilise l'image officielle de Node.js
FROM node:16-slim

# Définit le répertoire de travail
WORKDIR /app

# Copie les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json /app/

# Installe les dépendances de l'application React
RUN npm install

# Installe curl pour les tests de connectivité au backend
RUN apt-get update && apt-get install -y curl

# Copie le code source dans le conteneur
COPY . /app/

# Expose le port 3000 pour l'application React
EXPOSE 3000

# Démarre l'application React
CMD ["npm", "start"]
