import { Theme } from '@mui/material';

export const wizardBoxStyle = {
  width: '100%',
};

export const contentBoxStyle = (theme: Theme) => {
  return {
    display: 'flex',
    alignItems: 'flex-start',
    overflow: 'auto',
    '&::-webkit-scrollbar': { width: '4px' },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.main,
      borderRadius: '1rem',
    },
    height: '20rem',
    mt: 5,
    mb: 3,
  };
};

export const actionsBoxStyle = {
  display: 'flex',
  flexDirection: 'row',
  pt: 2,
  justifyContent: 'space-evenly',
};

export const buttonStyle = {
  borderRadius: '1rem',
  minWidth: '8rem',
};
