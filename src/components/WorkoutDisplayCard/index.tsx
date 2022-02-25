import { Grid, Container, Typography, Card, CardHeader, CardContent, Menu, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [allWorkout, setAllWorkout] = useState<workout>(workoutInitialState);
  const [allExercise, setAllExercise] = useState<exercise>(exerciseInitialState);
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

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleClose = (el: workoutObj) => {
    console.log(el);

    setSelectedWorkout(el);
    setAnchorElNav(null);
  };

  return (
    <Container maxWidth="md">
      <Box>
        <IconButton
          size="large"
          aria-label="Select Workout"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <KeyboardArrowDownIcon />
        </IconButton>
        <Menu open={Boolean(anchorElNav)}>
          {allWorkout.map((el) => (
            <MenuItem key={el.id}>
              <Typography onClick={() => handleClose(el)}>{el.workout_name}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Typography variant="h1">{selectedWorkout.workout_name}</Typography>
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
