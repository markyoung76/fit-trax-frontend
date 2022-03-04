import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import Nav from '../Nav';
import Mainboard from '../Mainboard';
import ExercisePlanner from '../ExercisePlanner';
import { lightTheme, darkTheme } from '../../styles/muiThemes';
import './App.scss';
import Homepage from '../Homepage';
import WorkoutDisplayCard from '../WorkoutDisplayCard';
import CreateExercise from '../CreateExercise';

const App = (): JSX.Element => {
  const { isLoading } = useAuth0();
  const [isLight, setIsLight] = useState(true);

  if (isLoading) return <div>Loading...</div>;

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <Nav setIsLight={setIsLight} isLight={isLight} />
      <Routes>
        <Route path="/" element={<Homepage isLight={isLight} />} />
        <Route path="/exercise-planner" element={<ExercisePlanner />} />
        <Route path="/workouts" element={<WorkoutDisplayCard />} />
        {/* <Route path="/meal-planner" element={} />
          <Route path="/hydration-tracker" element={} />
          <Route path="/meditation-portal" element={} /> */}
      </Routes>
    </ThemeProvider>
  );
};

export default App;
