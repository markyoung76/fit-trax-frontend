import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Container } from '@mui/material';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <Container>
      {!isAuthenticated && (
        <Button variant="contained" onClick={() => loginWithRedirect()}>
          Log in
        </Button>
      )}
    </Container>
  );
};

export default LoginButton;
