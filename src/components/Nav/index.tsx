import React from 'react';
import {
  Drawer,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Avatar,
  Tooltip,
  Button,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import logoLightMode from '../../assets/images/fit_trax_app_logo_lightmode.png';
import {
  avatarStyle,
  drawerStyle,
  iconButtonStyle,
  logoStyle,
  boxStyle,
  buttonStyle,
  drawerPaperStyle,
} from './styles';
import ThemeSwitch from '../ThemeSwitch';

type props = {
  isLight: boolean;
  setIsLight: Function;
};

const Nav = ({ isLight, setIsLight }: props) => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [age, setAge] = React.useState('');
  const [fitness, setFitness] = React.useState('');
  const [gender, setGender] = React.useState('');

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
  };

  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            <img src={logoLightMode} alt="fit_trax_app_logo" style={logoStyle} />
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <ThemeSwitch onClick={() => setIsLight(!isLight)} />
            <Tooltip title="User Account">
              <IconButton onClick={toggleDrawer(true)} sx={iconButtonStyle} data-testid="avatar">
                <Avatar sx={avatarStyle}>
                  <PersonOutlineIcon sx={{ fontSize: 45 }} />
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>

          <Drawer
            PaperProps={{
              sx: drawerPaperStyle,
            }}
            anchor="right"
            open={openDrawer}
            onClose={toggleDrawer(false)}
          >
            <Box component="form" sx={drawerStyle} noValidate autoComplete="off">
              <h3>User Account</h3>

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

              <Button variant="outlined" onClick={handleFormCancel}>
                Cancel
              </Button>

              <Button variant="contained" onClick={handleFormSubmit} sx={buttonStyle}>
                Save
              </Button>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
