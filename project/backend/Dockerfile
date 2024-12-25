# Utiliser l'image officielle de Python
FROM python:3.10-slim

# Définir le répertoire de travail
WORKDIR /app

# Installer les dépendances système
RUN apt-get update && apt-get install -y \
    gcc \
    pkg-config \
    libmariadb-dev \
    && rm -rf /var/lib/apt/lists/*

# Copier le fichier des dépendances
COPY requirements.txt .

# Installer les dépendances Python
RUN pip install --no-cache-dir -r requirements.txt

# Copier le reste du code de l'application
COPY . .

# Lister les fichiers pour vérifier la présence de manage.py
RUN ls -la /app/myproject

# Démarrer le serveur Django
CMD ["sh", "-c", "python myproject/manage.py runserver 0.0.0.0:8000"]

# CMD ["sh", "-c", "python myproject/manage.py makemigrations && python myproject/manage.py migrate && python myproject/manage.py runserver 0.0.0.0:8000"]
# Au cas où je gère mes tables depuis Django et donc qu'il me faille mettre manage = True pour les tables que je veux gérer 
# et ensuite appliquer les migrations.