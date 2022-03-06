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
export default function WorkoutDisplayCard() {
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
      fetch('https://fit-trax-backend-main.vercel.app/api/exercises/' + selectedWorkout.id)
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
    setSelectedWorkout(el);
    setAnchorElNav(null);
  };
  return (
    <Container maxWidth="sm" sx={{ border: '5px solid #6296EA', borderRadius: '1.8rem' }}>
      <Box sx={{ display: 'flex' }}>
        <IconButton
          size="large"
          aria-label="Select Workout"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
          sx={{ alignSelf: 'flex-end' }}
        >
          <KeyboardArrowDownIcon />
        </IconButton>
        <Menu
          open={Boolean(anchorElNav)}
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
        >
          {allWorkout.map((el) => (
            <MenuItem key={el.id}>
              <Typography onClick={() => handleClose(el)}>{el.workout_name}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Typography variant="h3" align="center" paragraph>
        {selectedWorkout.workout_name}
      </Typography>
      <Grid container>
        {allExercise.map((el) => (
          <Grid item xs={12} key={el.id}>
            <Card sx={{ maxWidth: '100%', margin: '0.5rem 0', border: '5px solid #6296EA', borderRadius: '1.8rem' }}>
              <CardContent>
                <Grid container>
                  <Grid item xs={5}>
                    <Typography>{el.exercise_name}</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography>{el.sets} Sets</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography>{el.reps} Reps</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }}>
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
