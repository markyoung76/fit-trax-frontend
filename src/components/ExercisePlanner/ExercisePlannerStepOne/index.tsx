import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { WorkoutType, WorkoutDifficulty } from '../../../types';
import { Container } from '@mui/material';
import { textFieldStyle } from './styles';

const workoutType = [WorkoutType.FullBody, WorkoutType.UpperBody, WorkoutType.LowerBody];

const workoutDifficulty = [WorkoutDifficulty.Beginner, WorkoutDifficulty.Intermediate, WorkoutDifficulty.Advanced];

const ExercisePlannerStepOne = (): JSX.Element => {
  const [workout, setWorkout] = React.useState('');
  const [workoutLevel, setWorkoutLevel] = React.useState('');

  const handleWorkoutType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWorkout(event.target.value);
  };

  const handleWorkoutDifficulty = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWorkoutLevel(event.target.value);
  };

  return (
    <>
      <Container fixed sx={textFieldStyle}>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '50ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Workout Name" variant="outlined" />
          <TextField
            id="outlined-select-workoutType"
            select
            label="Workout Type"
            value={workout}
            onChange={handleWorkoutType}
            size="medium"
          >
            {workoutType.map((workout) => {
              return (
                <MenuItem key={workout} value={workout}>
                  {workout}
                </MenuItem>
              );
            })}
          </TextField>
          <TextField
            id="outlined-select-workoutDifficulty"
            select
            label="Workout Difficulty"
            value={workoutLevel}
            onChange={handleWorkoutDifficulty}
          >
            {workoutDifficulty.map((workoutLevel) => {
              return (
                <MenuItem key={workoutLevel} value={workoutLevel}>
                  {workoutLevel}
                </MenuItem>
              );
            })}
          </TextField>
        </Box>
      </Container>
    </>
  );
};

export default ExercisePlannerStepOne;
