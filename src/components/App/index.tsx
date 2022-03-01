import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import Nav from '../Nav';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import Profile from '../Profile';
import Mainboard from '../Mainboard';
import ExercisePlanner from '../ExercisePlanner';
import { lightTheme, darkTheme } from '../../styles/muiThemes';
import './App.scss';

const App = (): JSX.Element => {
  const { isLoading } = useAuth0();
  const [isLight, setIsLight] = useState(true);

  const renderRoutes = (): JSX.Element => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainboard theme={isLight} />} />
          <Route path="/exercise-planner" element={<ExercisePlanner />} />
          {/* <Route path="/meal-planner" element={} />
          <Route path="/hydration-tracker" element={} />
          <Route path="/meditation-portal" element={} /> */}
        </Routes>
      </BrowserRouter>
    );
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <Nav setIsLight={setIsLight} isLight={isLight} />
      <LoginButton />
      <LogoutButton />
      <Profile />

      {renderRoutes()}
    </ThemeProvider>
  );
};

export default App;
