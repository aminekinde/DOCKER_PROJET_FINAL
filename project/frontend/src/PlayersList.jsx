import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Box } from '@mui/material';
import { fetchPlayers, addPlayer, updatePlayer, deletePlayer } from './api';

const PlayersList = () => {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState({ name: '', club: '', birth_year: '' });
  const [editingPlayer, setEditingPlayer] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [playerToDelete, setPlayerToDelete] = useState(null);

  useEffect(() => {
    const getPlayers = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
    };
    getPlayers();
  }, []);

  const handleAddPlayer = async () => {
    // Convertir `birth_year` en entier avant l'envoi
    const formattedPlayer = {
      ...newPlayer,
      birth_year: newPlayer.birth_year ? parseInt(newPlayer.birth_year, 10) : null,
    };
  
    // Vérification des champs avant l'envoi
    if (!formattedPlayer.name || !formattedPlayer.club || !formattedPlayer.birth_year) {
      console.error('Les données sont invalides, veuillez vérifier tous les champs');
      return;
    }
  
    try {
      // Ajouter le joueur via l'API
      const addedPlayer = await addPlayer(formattedPlayer);
      if (addedPlayer) {
        console.log('Joueur ajouté avec succès:', addedPlayer);
        setPlayers((prevPlayers) => [...prevPlayers, addedPlayer]);
        setNewPlayer({ name: '', club: '', birth_year: '' });
      }
    } catch (error) {
      console.error('Erreur lors de l’ajout du joueur:', error);
    }
  };
  
  

  const handleUpdatePlayer = async () => {
    if (editingPlayer) {
      const updatedPlayer = await updatePlayer(editingPlayer.id, editingPlayer);
      if (updatedPlayer) {
        setPlayers(players.map((player) => (player.id === updatedPlayer.id ? updatedPlayer : player)));
        setEditingPlayer(null);
      }
    }
  };

  const handleDeletePlayer = (id) => {
    setPlayerToDelete(id);
    setOpenDialog(true);
  };

  const confirmDeletePlayer = async () => {
    if (playerToDelete !== null) {
      await deletePlayer(playerToDelete);
      setPlayers(players.filter((player) => player.id !== playerToDelete));
      setPlayerToDelete(null);
      setOpenDialog(false);
    }
  };

  const columns = [
    { field: 'name', headerName: 'Nom', flex: 1 },
    { field: 'club', headerName: 'Club', flex: 1 },
    { field: 'birth_year', headerName: 'Année de naissance', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <>
          <Button
            onClick={() => setEditingPlayer(params.row)}
            variant="outlined"
            color="primary"
            size="small"
          >
            Modifier
          </Button>
          <Button
            onClick={() => handleDeletePlayer(params.row.id)}
            variant="outlined"
            color="secondary"
            size="small"
            style={{ marginLeft: 10 }}
          >
            Supprimer
          </Button>
        </>
      ),
    },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h2>Ajouter un joueur</h2>
          <TextField
            label="Nom"
            value={newPlayer.name}
            onChange={(e) => setNewPlayer({ ...newPlayer, name: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Club"
            value={newPlayer.club}
            onChange={(e) => setNewPlayer({ ...newPlayer, club: e.target.value })}
            fullWidth
            margin="normal"
          />
<TextField
  label="Année de naissance"
  value={newPlayer.birth_year}
  onChange={(e) => {
    // Ne garder que les chiffres
    const newValue = e.target.value.replace(/[^0-9]/g, ''); 
    setNewPlayer({ ...newPlayer, birth_year: newValue });
  }}
  fullWidth
  margin="normal"
  inputProps={{
    inputMode: 'numeric',  
    pattern: "[0-9]*",     // Permet uniquement les chiffres dans l'entrée
  }}
/>


          <Button variant="contained" color="primary" onClick={handleAddPlayer}>
            Ajouter
          </Button>
        </Grid>

        {editingPlayer && (
          <Grid item xs={12}>
            <h2>Modifier le joueur</h2>
            <TextField
              label="Nom"
              value={editingPlayer.name}
              onChange={(e) => setEditingPlayer({ ...editingPlayer, name: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Club"
              value={editingPlayer.club}
              onChange={(e) => setEditingPlayer({ ...editingPlayer, club: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Année de naissance"
              value={editingPlayer.birth_year}
              onChange={(e) => setEditingPlayer({ ...editingPlayer, birth_year: e.target.value })}
              fullWidth
              margin="normal"
              type="number"
            />
            <Button variant="contained" color="primary" onClick={handleUpdatePlayer}>
              Mettre à jour
            </Button>
          </Grid>
        )}

        <Grid item xs={12}>
          <h2>Liste des joueurs</h2>
          <DataGrid
            rows={players}
            columns={columns}
            autoHeight
            pageSize={5}
            rowsPerPageOptions={[5, 10]}
          />
        </Grid>
      </Grid>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirmation de suppression</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Êtes-vous sûr de vouloir supprimer ce joueur ? Cette action est irréversible.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Annuler
          </Button>
          <Button onClick={confirmDeletePlayer} color="secondary">
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PlayersList;
