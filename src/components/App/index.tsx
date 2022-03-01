import Nav from '../Nav';
import WorkoutDisplay from '../WorkoutDisplayCard';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import Profile from '../Profile';
import { useAuth0 } from '@auth0/auth0-react';
import './App.scss';
import { ThemeProvider } from '@mui/material';

import { lightTheme, darkTheme } from '../../styles/muiThemes';
import { useState } from 'react';

function App() {
  const { isLoading } = useAuth0();
  const [isLight, setIsLight] = useState(true);

  if (isLoading) return <div>Loading...</div>;

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <Nav />
      <WorkoutDisplay />
      <LoginButton />
      <LogoutButton />
      <Profile />
    </ThemeProvider>
  );
}

export default App;
