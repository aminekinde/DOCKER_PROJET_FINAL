-- Script pour initialiser la base de données

-- Pas besoin de recréer la base de données ni les utilisateurs, ceci est géré par le docker-compose
USE db_esiea;

CREATE TABLE IF NOT EXISTS tb_players (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Club VARCHAR(255) NOT NULL,
    AnneeNaissance INT NOT NULL
);

INSERT INTO tb_players (Name, Club, AnneeNaissance) VALUES ('Amine KINDE', 'Esiea', 2024);
INSERT INTO tb_players (Name, Club, AnneeNaissance) VALUES ('Ronaldo', 'Real Madrid', 1988);
INSERT INTO tb_players (Name, Club, AnneeNaissance) VALUES ('Marcelo', 'Real Madrid', 1985);
INSERT INTO tb_players (Name, Club, AnneeNaissance) VALUES ('Vinicius', 'Real Madrid', 2000);
INSERT INTO tb_players (Name, Club, AnneeNaissance) VALUES ('Happy', 'New Year', 2025);
