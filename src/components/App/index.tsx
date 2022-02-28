import Nav from '../Nav';
import WorkoutDisplay from '../WorkoutDisplayCard';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import Profile from '../Profile';
import { useAuth0 } from '@auth0/auth0-react';
import './App.scss';

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="app">
      <Nav />
      <WorkoutDisplay />
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;
