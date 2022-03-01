import { Button, Container, Grid, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import React from 'react';

export default function CreateExercise() {
  return (
    <Container maxWidth="md">
      <Grid container>
        <TextField fullWidth required label="Exercise Name" />
        <Grid item xs={4}>
          <TextField required label="Sets" />
        </Grid>
        <Grid item xs={4}>
          <TextField required label="Reps" />
        </Grid>
        <Grid item xs={4}>
          <TextField required label="Rest Period" />
        </Grid>

        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="outlined" sx={{ borderRadius: '1rem' }}>
            <ClearIcon />
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" sx={{ borderRadius: '1rem' }}>
            <AddIcon />
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
