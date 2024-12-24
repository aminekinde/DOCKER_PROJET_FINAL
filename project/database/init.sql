-- Créer l'utilisateur 'test' si nécessaire
CREATE USER IF NOT EXISTS 'test'@'%' IDENTIFIED BY 'test';

-- Donner les droits nécessaires à l'utilisateur 'test' sur la base 'db_esiea'
GRANT ALL PRIVILEGES ON db_esiea.* TO 'test'@'%';

-- Appliquer les changements de privilèges
FLUSH PRIVILEGES;
