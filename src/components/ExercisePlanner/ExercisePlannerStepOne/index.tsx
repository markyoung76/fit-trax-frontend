import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { WorkoutType, WorkoutDifficulty } from '../../../types';
import { Button, Container } from '@mui/material';
import { textFieldStyle } from './styles';
import { v4 as uuid } from 'uuid';

const workoutTypes = [WorkoutType.FullBody, WorkoutType.UpperBody, WorkoutType.LowerBody];
const workoutDifficulties = [WorkoutDifficulty.Beginner, WorkoutDifficulty.Intermediate, WorkoutDifficulty.Advanced];

const ExercisePlannerStepOne = (): JSX.Element => {
  const [workoutType, setWorkoutType] = React.useState('');
  const [workoutLevel, setWorkoutLevel] = React.useState('');
  const [workoutName, setWorkoutName] = React.useState('');

  const handleWorkoutName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWorkoutName(event.target.value);
  };

  const handleWorkoutType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWorkoutType(event.target.value);
  };

  const handleWorkoutDifficulty = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWorkoutLevel(event.target.value);
  };

  const handleSaveWorkout = () => {
    const data = {
      id: uuid(),
      workout_name: workoutName,
      workout_type: workoutType,
      workout_difficulty: workoutLevel,
    };

    fetch('https://fit-trax-backend-main.vercel.app/api/workouts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  };

  return (
    <>
      <Container fixed sx={textFieldStyle}>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '78ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Workout Name"
            value={workoutName}
            onChange={handleWorkoutName}
            variant="outlined"
            sx={{ maxWidth: '100%', margin: '0.5rem 0' }}
          />
          <TextField
            id="outlined-select-workoutType"
            select
            label="Workout Type"
            value={workoutType}
            onChange={handleWorkoutType}
            sx={{ maxWidth: '100%', margin: '0.5rem 0' }}
          >
            {workoutTypes.map((workout) => {
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
            sx={{ maxWidth: '100%', margin: '0.5rem 0' }}
          >
            {workoutDifficulties.map((workoutLevel) => {
              return (
                <MenuItem key={workoutLevel} value={workoutLevel}>
                  {workoutLevel}
                </MenuItem>
              );
            })}
          </TextField>
        </Box>
        <Button onClick={handleSaveWorkout}>Create Workout</Button>
      </Container>
    </>
  );
};

export default ExercisePlannerStepOne;
