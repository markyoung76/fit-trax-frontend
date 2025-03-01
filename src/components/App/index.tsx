import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Nav from '../Nav';
import ExercisePlanner from '../ExercisePlanner';
import { lightTheme, darkTheme } from '../../styles/muiThemes';
import Homepage from '../Homepage';

const App = (): JSX.Element => {
  const { isLoading } = useAuth0();
  const [isLight, setIsLight] = useState(true);

  if (isLoading) return <div>Loading...</div>;

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <CssBaseline />
      <Nav setIsLight={setIsLight} isLight={isLight} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/exercise-planner" element={<ExercisePlanner />} />
        {/* <Route path="/meal-planner" element={} />
          <Route path="/hydration-tracker" element={} />
          <Route path="/meditation-portal" element={} /> */}
      </Routes>
    </ThemeProvider>
  );
};

export default App;
