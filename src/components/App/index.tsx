import Nav from '../Nav';
import WorkoutDisplay from '../WorkoutDisplayCard';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import Profile from '../Profile';

import './App.scss';

function App() {
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
