import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      variant="contained"
      color="secondary"
      sx={{ borderRadius: '1.563rem', padding: '0.5rem 2rem' }}
      onClick={() => loginWithRedirect()}
    >
      LOGIN
    </Button>
  );
};

export default LoginButton;
