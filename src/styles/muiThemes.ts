import { createTheme } from '@mui/material';

export {};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: '#6296EA',
    },

    secondary: {
      main: '#FFB25B',
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
