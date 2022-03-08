import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { Box, Container, TextField, MenuItem } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { WorkoutType, WorkoutDifficulty } from '../../../types';
import { containerStyle, textFieldStyle, buttonStyle, boxButtonStyle, inputsBoxStyle } from './styles';

const workoutTypes = [WorkoutType.FullBody, WorkoutType.UpperBody, WorkoutType.LowerBody];
const workoutDifficulties = [WorkoutDifficulty.Beginner, WorkoutDifficulty.Intermediate, WorkoutDifficulty.Advanced];

const ExercisePlannerStepOne = (): JSX.Element => {
  const [workoutType, setWorkoutType] = React.useState('');
  const [workoutLevel, setWorkoutLevel] = React.useState('');
  const [workoutName, setWorkoutName] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);

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
    }).then(() => {
      setIsLoading(false);
      setWorkoutType('');
      setWorkoutLevel('');
      setWorkoutName('');
    });
  };

  return (
    <Container maxWidth="sm" sx={containerStyle}>
      <form onSubmit={handleSubmit}>
        <Box sx={inputsBoxStyle}>
          <TextField
            id="workout-name"
            required
            label="Workout Name"
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
            variant="outlined"
            sx={textFieldStyle}
          />

          <TextField
            id="workout-type"
            select
            required
            label="Workout Type"
            value={workoutType}
            onChange={(e) => setWorkoutType(e.target.value)}
            sx={textFieldStyle}
          >
            {workoutTypes.map((workout) => (
              <MenuItem key={workout} value={workout}>
                {workout}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="workout-difficulty"
            select
            required
            label="Workout Difficulty"
            value={workoutLevel}
            onChange={(e) => setWorkoutLevel(e.target.value)}
            sx={textFieldStyle}
          >
            {workoutDifficulties.map((workoutLevel) => (
              <MenuItem key={workoutLevel} value={workoutLevel}>
                {workoutLevel}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <Box sx={boxButtonStyle}>
          <LoadingButton type="submit" sx={buttonStyle} loading={isLoading} variant="contained">
            Save
          </LoadingButton>
        </Box>
      </form>
    </Container>
  );
};

export default ExercisePlannerStepOne;
