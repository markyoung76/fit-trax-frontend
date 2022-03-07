import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button variant="contained" sx={{ borderRadius: '1.563rem', padding: '0.5rem 2rem' }} onClick={() => logout()}>
      LOGOUT
    </Button>
  );
};

export default LogoutButton;
