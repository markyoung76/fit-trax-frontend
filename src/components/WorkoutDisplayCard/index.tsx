import { Grid, Container, Typography, Card, CardHeader, CardContent } from '@mui/material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { useState, useEffect } from 'react';
import internal from 'stream';
import { workoutInitialState, exerciseInitialState } from '../../initialStates';

type exercise = {
  id: number;
  exercise_name: string;
  sets: number;
  reps: number;
  rest_period: string;
  workout_ref: string;
}[];

type workoutObj = {
  id: string;
  workout_name: string;
  workout_type: string;
  workout_difficulty: string;
};

type workout = workoutObj[];

export default function WorkoutDisplay() {
  const [allWorkout, setAllWorkout] = useState<workout>(workoutInitialState);
  const [allExercise, setAllExercise] = useState<exercise>([]);
  const [selectedWorkout, setSelectedWorkout] = useState<workoutObj>(workoutInitialState[0]);

  useEffect(() => {
    async function getAllWorkouts() {
      const response = await fetch('https://fit-trax-backend-main.vercel.app/api/workouts');
      const data = await response.json();
      setAllWorkout(data);
    }
    async function getAllExercise() {
      console.log('all exercises');

      fetch(
        'https://fit-trax-backend-main.vercel.app/api/exercises/' + selectedWorkout
          ? selectedWorkout.id
          : 'dbd0d2c1-84f9-4413-b4ed-eed2b266d10d',
      )
        .then((response) => response.json())
        .then((data) => setAllExercise(data));
    }

    getAllWorkouts();
    getAllExercise();
  }, [selectedWorkout]);

  return (
    <Container maxWidth="md">
      <Typography>workout name</Typography>
      <Grid container>
        {allExercise.map((el) => (
          <Grid item xs={12} key={el.id}>
            <Card sx={{ maxWidth: '90%' }}>
              <CardHeader
                action={
                  <IconButton>
                    <input type={'checkbox'} />
                  </IconButton>
                }
                title={el.exercise_name}
              ></CardHeader>
              <CardContent>
                <Grid container>
                  <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography>{el.sets} Sets</Typography>
                  </Grid>
                  <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography>{el.reps} Reps</Typography>
                  </Grid>
                  <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography>{el.rest_period} rest</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
