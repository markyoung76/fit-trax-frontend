import { Button, Container, Grid, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import React from 'react';
import css from './CreateExercise.module.css';
import { useState } from 'react';
import { Box } from '@mui/material';

export default function CreateExercise() {
  const [exerciseNumber, setExerciseNumber] = useState([1]);

  return (
    <Container maxWidth="md">
      <Grid container>
        {exerciseNumber.map((number, index) => (
          <Container id={number.toString()} key={index}>
            <TextField fullWidth required label="Exercise Name" />
            <Grid className={css.gridMargin} sx={{ display: 'flex' }} item xs={4}>
              <TextField className={css.smallInputFields} required label="Sets" sx={{ maxWidth: '7rem' }} />
            </Grid>
            <Grid className={css.gridMargin} sx={{ display: 'flex', justifyContent: 'center' }} item xs={4}>
              <TextField className={css.smallInputFields} required label="Reps" />
            </Grid>
            <Grid className={css.gridMargin} sx={{ display: 'flex', justifyContent: 'end' }} item xs={4}>
              <TextField className={css.smallInputFields} required label="Rest Period" />
            </Grid>
          </Container>
        ))}

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
