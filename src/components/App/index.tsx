import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';

import Nav from '../Nav';
import Mainboard from '../Mainboard';
import { lightTheme, darkTheme } from '../../styles/muiThemes';
import './App.scss';
import Homepage from '../Homepage';
import WorkoutDisplay from '../WorkoutDisplayCard';
import CreateExercise from '../CreateExercise';

function App() {
  const { isLoading } = useAuth0();
  const [isLight, setIsLight] = useState(true);

  if (isLoading) return <div>Loading...</div>;

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <Nav setIsLight={setIsLight} isLight={isLight} />
      <Routes>
        <Route path="/" element={<Homepage isLight={isLight} />} />
        {/* <Route path="/exercise-planner" element={<ExercisePlannerPage />} /> */}
        <Route path="/workouts" element={<CreateExercise />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
