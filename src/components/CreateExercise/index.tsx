import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import React, { useEffect } from 'react';
import css from './CreateExercise.module.css';
import { useState } from 'react';
import { Box } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { json } from 'stream/consumers';
interface exercisesOBJ {
  exercise_name: string;
  sets: number;
  reps: number;
  rest_period: string;
  workout_ref: string;
}
interface exercisesPromise extends exercisesOBJ {
  id: string;
}
export default function CreateExercise() {
  const [exerciseNumber, setExerciseNumber] = useState([1]);
  var workoutRef: string;
  useEffect(() => {
    async function getLatestWorkoutRef() {
      const result = await fetch('https://fit-trax-backend-main.vercel.app/api/workouts'); //nooooo! we need to make a new route that delivers the latest workout to us
      const data: exercisesPromise[] = await result.json();
      if (data) {
        const latestWorkout = data[data.length - 1];
        workoutRef = latestWorkout.id;
        console.log('workoutREf', workoutRef);
      }
    }
    getLatestWorkoutRef();
  }, []);
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
  // const handleSubmit = (e: React.SyntheticEvent) => {
  //   e.preventDefault();
  //   const event = e.target as HTMLFormElement;
  //   // const newExercises = [{}];
  // };
  return (
    <Container maxWidth="sm" sx={{ border: '5px solid #6296EA', borderRadius: '1.3rem' }}>
      <Typography variant="h4" align="center" fontWeight="bold" paragraph>
        Exercise Planner
      </Typography>
      <form
        className={css.formStyle}
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          let index = 0;
          const exercisesArray: exercisesOBJ[] = [];
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
              rest_period: targetRest.value + 'seconds',
              workout_ref: workoutRef,
            };
            exercisesArray.push(exerciseObject);
            index += 8;
            console.log(exercisesArray);
          });
          fetch('https://fit-trax-backend-main.vercel.app/api/exercises', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(exercisesArray),
          });
          console.log('sending post request', exercisesArray);
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
                  sx={{ border: '5px solid #6296EA', borderRadius: '1.3rem' }}
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
                  label="Rest"
                  sx={{ border: '5px solid #6296EA', borderRadius: '1.3rem' }}
                />
              </Grid>
            </Box>
          ))}
        </Grid>
        <Grid container>
          <Grid
            item
            xs={6}
            sx={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}
            className={css.gridMargin}
          >
            <Button
              variant="outlined"
              sx={{ borderRadius: '1rem', padding: '0.5rem 2.5rem' }}
              onClick={handleRemoveExerciseClick}
            >
              <ClearIcon />
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}
            className={css.gridMargin}
          >
            <Button
              variant="contained"
              sx={{ borderRadius: '1rem', padding: '0.5rem 2.5rem' }}
              onClick={handleAddExerciseClick}
            >
              <AddIcon />
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: 'flex', justifyContent: 'center', margin: '1rem 0 2rem 0' }}
            className={css.gridMargin}
          >
            <Button variant="outlined" sx={{ borderRadius: '1rem', padding: '0.5rem  2.5rem' }} color="secondary">
              <ArrowBackIosNewIcon />
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: 'flex', justifyContent: 'center', margin: '1rem 0 2rem 0' }}
            className={css.gridMargin}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{ borderRadius: '1rem', padding: '0.5rem 2.5rem' }}
              color="secondary"
            >
              <DoneIcon />
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
