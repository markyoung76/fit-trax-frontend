import { useState, useEffect } from 'react';
import { Grid, Container, Typography, Card, CardHeader, CardContent } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { workoutInitialState } from '../../initialStates';
import { Exercise, Workout } from '../../types';
import { gridStyle } from './styles';

export default function WorkoutDisplay() {
  const [allWorkout, setAllWorkout] = useState<Workout[]>(workoutInitialState);
  const [allExercise, setAllExercise] = useState<Exercise[]>([]);
  const [selectedWorkout, setSelectedWorkout] = useState<Workout>(workoutInitialState[0]);

  useEffect(() => {
    async function getAllWorkouts() {
      const response = await fetch('https://fit-trax-backend-main.vercel.app/api/workouts');
      const data = await response.json();
      setAllWorkout(data);
    }

    async function getAllExercise() {
      console.log('all exercises');

      fetch('https://fit-trax-backend-main.vercel.app/api/exercises/' + selectedWorkout.id)
        .then((response) => response.json())
        .then((data) => setAllExercise(data));
    }

    getAllWorkouts();
    getAllExercise();
  }, [selectedWorkout]);

  const renderExercise = (el: Exercise) => (
    <Grid item xs={12} key={el.id}>
      <Card sx={{ maxWidth: '90%' }}>
        <CardHeader
          action={
            <IconButton>
              <input type={'checkbox'} />
            </IconButton>
          }
          title={el.name}
        ></CardHeader>

        <CardContent>
          <Grid container>
            <Grid item xs={4} sx={gridStyle}>
              <Typography>{el.sets} Sets</Typography>
            </Grid>
            <Grid item xs={4} sx={gridStyle}>
              <Typography>{el.reps} Reps</Typography>
            </Grid>
            <Grid item xs={4} sx={gridStyle}>
              <Typography>{el.restPeriod} rest</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );

  return (
    <Container maxWidth="md">
      <Typography>workout name</Typography>

      <Grid container>{allExercise.map((el) => renderExercise(el))}</Grid>
    </Container>
  );
}
