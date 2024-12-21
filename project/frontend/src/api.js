const API_URL = 'http://127.0.0.1:8000/myapp/players';

// Récupérer tous les joueurs
export const fetchPlayers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des joueurs');
    }
    return await response.json();
  } catch (error) {
    console.error('Erreur', error);
    return [];
  }
};

// Ajouter un joueur
export const addPlayer = async (player) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/myapp/players/add/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(player),
      });
      if (!response.ok) {
        throw new Error('Erreur lors de l’ajout du joueur');
      }
      return await response.json();
    } catch (error) {
      console.error('Erreur:', error);
      return null;
    }
  };
  
// Modifier un joueur
export const updatePlayer = async (playerId, updatedPlayer) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/myapp/players/${playerId}/update/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPlayer),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la mise à jour du joueur');
    }

    return await response.json();
  } catch (error) {
    console.error('Erreur', error);
    return null;
  }
};

// Supprimer un joueur
export const deletePlayer = async (playerId) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/myapp/players/${playerId}/delete/`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la suppression du joueur');
    }

    return true;
  } catch (error) {
    console.error('Erreur', error);
    return false;
  }
};
