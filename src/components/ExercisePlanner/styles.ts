import { Theme } from '@mui/material';

export const containerStyle = (theme: Theme) => {
  return {
    width: '900px',
    paddingTop: '2rem',
    paddingBottom: '4rem',
    border: `5px solid ${theme.palette.primary.main}`,
    borderRadius: '1.8rem',
  };
};
