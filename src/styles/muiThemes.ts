import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  typography: {
    fontFamily: ['Courier Prime', 'monospace'].join(','),
  },

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
  typography: {
    fontFamily: ['Courier Prime', 'monospace'].join(','),
  },

  palette: {
    mode: 'dark',

    primary: {
      main: '#FFB25B',
    },

    secondary: {
      main: '#6296EA',
    },

    background: {
      paper: 'black',
      default: 'black',
    },
  },
});
