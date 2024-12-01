import { createTheme } from '@mui/material/styles';
import modernTheme from './themes/modern';
import darkTheme from './themes/dark';
import gamingTheme from './themes/gaming';
import gradientTheme from './themes/gradient';

export const themes = {
  modern: modernTheme,
  dark: darkTheme,
  gaming: gamingTheme,
  gradient: gradientTheme,
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#2C3E50', // Bleu foncé professionnel
      light: '#34495E',
      dark: '#1A252F',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#E74C3C', // Rouge-orange moderne
      light: '#EC7063',
      dark: '#C0392B',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F8F9FA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#7F8C8D',
    },
    success: {
      main: '#27AE60',
      light: '#2ECC71',
      dark: '#219A52',
    },
    error: {
      main: '#E74C3C',
      light: '#FF6B6B',
      dark: '#C0392B',
    },
    warning: {
      main: '#F39C12',
      light: '#F1C40F',
      dark: '#D35400',
    },
    info: {
      main: '#3498DB',
      light: '#5DADE2',
      dark: '#2980B9',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#2C3E50',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#2C3E50',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: '#2C3E50',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#2C3E50',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#2C3E50',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      color: '#2C3E50',
    },
    subtitle1: {
      fontSize: '1.1rem',
      color: '#7F8C8D',
    },
    body1: {
      fontSize: '1rem',
      color: '#2C3E50',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 20px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #2C3E50 30%, #34495E 90%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #1A252F 30%, #2C3E50 90%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(45deg, #E74C3C 30%, #EC7063 90%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #C0392B 30%, #E74C3C 90%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
          '&:hover': {
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)',
            transform: 'translateY(-2px)',
            transition: 'all 0.3s ease-in-out',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(45deg, #2C3E50 30%, #34495E 90%)',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
});

export default theme;
