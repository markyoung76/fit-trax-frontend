import React from 'react';
import {
  Drawer,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Avatar,
  Tooltip,
  Button,
  useTheme,
  CustomTheme,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import logoLightMode from '../../assets/images/fit_trax_app_logo_lightmode.png';
import logoDarkMode from '../../assets/images/fit_trax_app_logo_darkmode.png';
import {
  avatarStyle,
  drawerStyle,
  iconButtonStyle,
  logoStyle,
  boxStyle,
  drawerPaperStyle,
  appBarStyle,
  toolbarStyle,
  userAccountButtons,
  iconStyle,
} from './styles';
import ThemeSwitch from '../ThemeSwitch';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';

interface Props {
  isLight: boolean;
  setIsLight: Function;
}

const Nav = ({ isLight, setIsLight }: Props) => {
  const { isAuthenticated } = useAuth0();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [age, setAge] = React.useState('');
  const [fitness, setFitness] = React.useState('');
  const [gender, setGender] = React.useState('');

  const theme = useTheme() as CustomTheme;

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  const handleFormSubmit = () => {
    /**
     * @TODO:
     * Waiting for API to submit the form state
     */
    setOpenDrawer(false);
  };

  const handleFormCancel = () => {
    setOpenDrawer(false);
    setUsername('');
    setAge('');
    setFitness('');
    setGender('');
  };

  return (
    <AppBar position="static" color="transparent" sx={appBarStyle}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={toolbarStyle}>
          <img src={isLight ? logoLightMode : logoDarkMode} alt="fit_trax_app_logo" style={logoStyle} />

          <Box>
            <ThemeSwitch sx={{ marginRight: '2rem' }} onClick={() => setIsLight(!isLight)} />
            <Tooltip title="User Account">
              <IconButton onClick={toggleDrawer(true)} sx={iconButtonStyle(theme)} data-testid="avatar">
                <Avatar sx={avatarStyle(theme)}>
                  <PersonOutlineIcon sx={iconStyle(theme)} />
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>

          <Drawer
            PaperProps={{
              sx: drawerPaperStyle(theme),
            }}
            anchor="right"
            open={openDrawer}
            onClose={toggleDrawer(false)}
          >
            <Box component="form" sx={drawerStyle} noValidate autoComplete="off">
              <h3 style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Courier New' }}>User Account</h3>

              <Box sx={boxStyle}>
                <TextField
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  label="Username"
                  variant="outlined"
                />
              </Box>

              <Box sx={boxStyle}>
                <TextField value={age} onChange={(e) => setAge(e.target.value)} label="Age" variant="outlined" />
              </Box>

              <Box sx={boxStyle}>
                <TextField
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  label="Gender"
                  variant="outlined"
                />
              </Box>

              <Box sx={boxStyle}>
                <TextField
                  value={fitness}
                  onChange={(e) => setFitness(e.target.value)}
                  label="Level of fitness"
                  variant="outlined"
                />
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="contained" color="secondary" sx={userAccountButtons} onClick={handleFormSubmit}>
                  SAVE
                </Button>

                <Button variant="outlined" color="secondary" sx={userAccountButtons} onClick={handleFormCancel}>
                  CLEAR
                </Button>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              {' '}
              <h3 style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Courier New' }}>User Login</h3>
            </Box>
            <Box style={{ display: 'flex', justifyContent: 'center', paddingTop: '0.5rem' }}>
              {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
