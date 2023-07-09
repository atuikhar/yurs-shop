import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          color: theme.palette.grey[900],
          backgroundColor: theme.palette.grey[0],
          fontSize: '1rem',
          fontWeight: 600,
          borderRadius: 100,
          '&:hover': {
            boxShadow: 'none',
            background: theme.palette.grey[900],
            color: theme.palette.grey[0],
          },
        },
        sizeLarge: {
          height: 48,
        },
        // contained
        containedInherit: {
          color: theme.palette.grey[800],
          '&:hover': {
            backgroundColor: theme.palette.grey[400],
          },
        },

        // outlined
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
