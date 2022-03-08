import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button variant="contained" sx={{ borderRadius: '1rem', minWidth: '8rem' }} onClick={() => logout()}>
      LOGOUT
    </Button>
  );
};

export default LogoutButton;
