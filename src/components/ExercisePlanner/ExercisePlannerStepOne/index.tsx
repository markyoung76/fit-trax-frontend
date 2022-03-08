import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { WorkoutType, WorkoutDifficulty } from '../../../types';
import { Button, Container } from '@mui/material';
import { textFieldStyle, buttonStyle } from './styles';
import { v4 as uuid } from 'uuid';

const workoutTypes = [WorkoutType.FullBody, WorkoutType.UpperBody, WorkoutType.LowerBody];
const workoutDifficulties = [WorkoutDifficulty.Beginner, WorkoutDifficulty.Intermediate, WorkoutDifficulty.Advanced];

const ExercisePlannerStepOne = (): JSX.Element => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const workoutForm = e.target as HTMLFormElement;
    const workoutName = workoutForm[0] as HTMLInputElement;
    const workoutType = workoutForm[2] as HTMLInputElement;
    const workoutLevel = workoutForm[4] as HTMLInputElement;
    const data = {
      id: uuid(),
      workout_name: workoutName.value,
      workout_type: workoutType.value,
      workout_difficulty: workoutLevel.value,
    };
    fetch('https://fit-trax-backend-main.vercel.app/api/workouts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    workoutName.value = '';
    workoutType.value = '';
    workoutLevel.value = '';
  };

  return (
    <>
      <Container fixed sx={textFieldStyle}>
        <form
          onSubmit={(e: React.SyntheticEvent) => {
            handleSubmit(e);
          }}
        >
          <Box
            sx={{
              '& > :not(style)': { m: 1, width: '55ch' },
            }}
          >
            <TextField
              id="outlined-basic"
              required
              label="Workout Name"
              variant="outlined"
              sx={{ maxWidth: '100%', margin: '0.5rem 0' }}
            />
            <TextField
              id="outlined-select-workoutType"
              select
              required
              label="Workout Type"
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
              required
              label="Workout Difficulty"
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
          <Box sx={{ paddingTop: '3rem' }}>
            <Button type="submit" variant="contained" sx={buttonStyle}>
              Save
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
};

export default ExercisePlannerStepOne;
