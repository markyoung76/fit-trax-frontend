import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import React from 'react';
import css from './CreateExercise.module.css';
import { useState } from 'react';
import { Box } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface exercisesOBJ {
  exercise_name: string;
  sets: number;
  reps: number;
  rest_period: string;
  workout_ref: string;
}

export default function CreateExercise() {
  const [exerciseNumber, setExerciseNumber] = useState([1]);

  const handleAddExerciseClick = () => {
    const newArray = [...exerciseNumber, 1];
    console.log(newArray);

    setExerciseNumber(newArray);
  };

  const handleRemoveExerciseClick = () => {
    if (exerciseNumber.length > 1) {
      const newArray = [...exerciseNumber];
      newArray.pop();
      setExerciseNumber(newArray);
    }
  };
  //
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const event = e.target as HTMLFormElement;
    // const newExercises = [{}];
  };

  return (
    <Container maxWidth="md">
      <form
        className={css.formStyle}
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          let index = 0;
          const exercisesArray = [];
          const event = e.target as HTMLFormElement;
          exerciseNumber.forEach((el) => {
            const targetName = event[index] as HTMLInputElement;
            const targetSets = event[index + 2] as HTMLInputElement;
            const targetReps = event[index + 4] as HTMLInputElement;
            const targetRest = event[index + 6] as HTMLInputElement;

            const exerciseObject: exercisesOBJ = {
              exercise_name: targetName.value,
              sets: Number(targetSets.value),
              reps: Number(targetReps.value),
              rest_period: targetRest.value,
              workout_ref: 'non given yet', //somehow import uuid from latest workout or have it passed as a prop from the previous component
            };
            exercisesArray.push(exerciseObject);
            console.log(exercisesArray);
          });
        }}
      >
        <Grid container>
          {exerciseNumber.map((number, index) => (
            <Box
              id={number.toString()}
              key={index}
              className={css.gridMargin}
              sx={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}
            >
              <TextField
                type="text"
                fullWidth
                required
                label="Exercise Name"
                sx={{ border: '5px solid #6296EA', borderRadius: '1.3rem' }}
              />
              <Grid className={css.gridMargin} sx={{ display: 'flex', margin: '1rem 0' }} item xs={4}>
                <TextField
                  className={css.smallInputFields}
                  required
                  label="Sets"
                  sx={{ maxWidth: '7rem', border: '5px solid #6296EA', borderRadius: '1.3rem' }}
                />
              </Grid>
              <Grid
                className={css.gridMargin}
                sx={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}
                item
                xs={4}
              >
                <TextField
                  className={css.smallInputFields}
                  required
                  label="Reps"
                  sx={{ border: '5px solid #6296EA', borderRadius: '1.3rem' }}
                />
              </Grid>
              <Grid
                className={css.gridMargin}
                sx={{ display: 'flex', justifyContent: 'end', margin: '1rem 0' }}
                item
                xs={4}
              >
                <TextField
                  className={css.smallInputFields}
                  required
                  label="Rest Period"
                  sx={{ border: '5px solid #6296EA', borderRadius: '1.3rem' }}
                />
              </Grid>
            </Box>
          ))}
        </Grid>
        <Grid container>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }} className={css.gridMargin}>
            <Button variant="outlined" sx={{ borderRadius: '1rem' }} onClick={handleRemoveExerciseClick}>
              <ClearIcon />
            </Button>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }} className={css.gridMargin}>
            <Button variant="contained" sx={{ borderRadius: '1rem' }} onClick={handleAddExerciseClick}>
              <AddIcon />
            </Button>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }} className={css.gridMargin}>
            <Button variant="outlined" sx={{ borderRadius: '1rem' }} color="secondary">
              <ArrowBackIosNewIcon />
            </Button>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }} className={css.gridMargin}>
            <Button type="submit" variant="contained" sx={{ borderRadius: '1rem' }} color="secondary">
              <DoneIcon />
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
