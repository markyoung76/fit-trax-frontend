import { createTheme } from '@mui/material';

export {};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: '#6296EA',
      contrastText: '#0000',
    },

    secondary: {
      main: '#FFB25B',
      contrastText: '#0000',
    },

    background: {
      paper: '#FDFBF9',
      default: '#FDFBF9',
    },
  },
});
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: '#FFB25B',
    },

    secondary: {
      main: '#6296EA',
    },

    background: {
      default: '#0000',
    },
  },
});
