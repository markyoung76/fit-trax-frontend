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

  negativeColor: '#FDFBF9',
  iconColor: 'black',

  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#6296EA',
          },
        },
        notchedOutline: {
          borderColor: '#6296EA',
          borderWidth: '3px',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '1.3rem!important',
        },
      },
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

  negativeColor: '#402C17',
  iconColor: 'white',

  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FFB25B',
          },
        },
        notchedOutline: {
          borderColor: '#FFB25B',
          borderWidth: '3px',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '1.3rem!important',
        },
      },
    },
  },
});
