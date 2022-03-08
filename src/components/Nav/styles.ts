import { CustomTheme } from '@mui/material';

export const appBarStyle = {
  boxShadow: 'none',
};

export const avatarStyle = (theme: CustomTheme) => {
  return {
    color: theme.iconColor,
    backgroundColor: 'transparent',
    border: `2px ${theme.iconColor} solid`,
  };
};

export const iconStyle = (theme: CustomTheme) => {
  return {
    fontSize: 45,
    color: theme.iconColor,
  };
};

export const iconButtonStyle = (theme: CustomTheme) => {
  return {
    border: `3px ${theme.palette.primary.main} solid`,
    padding: '2px',
  };
};

export const drawerStyle = {
  padding: '3rem',
  '& > :not(style)': { m: 3 },
};

export const drawerPaperStyle = (theme: CustomTheme) => {
  return {
    backgroundColor: theme.palette.background.paper,
  };
};

export const logoStyle = {
  height: '150px',
};

export const boxStyle = {
  display: 'flex',
};

export const toolbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
};

export const userAccountButtons = {
  borderRadius: '1rem',
  padding: '0.5rem 1rem',
  width: '5.5rem',
};
