import { createTheme } from '@mui/material/styles';

const gamingTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f43f5e',
      light: '#fb7185',
      dark: '#e11d48',
    },
    secondary: {
      main: '#3b82f6',
      light: '#60a5fa',
      dark: '#2563eb',
    },
    background: {
      default: '#09090b',
      paper: '#18181b',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
    },
    error: {
      main: '#dc2626',
      light: '#ef4444',
      dark: '#b91c1c',
    },
  },
  typography: {
    fontFamily: '"Rajdhani", "Inter", "Roboto", sans-serif',
    h1: {
      fontSize: '2.75rem',
      fontWeight: 700,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 700,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '0.01em',
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 600,
      letterSpacing: '0.05em',
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: '10px 24px',
          transition: 'all 0.2s ease-in-out',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
            transform: 'translateX(-100%)',
            transition: 'transform 0.3s ease-in-out',
          },
          '&:hover::before': {
            transform: 'translateX(100%)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
          boxShadow: '0 4px 16px rgba(244, 63, 94, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)',
            boxShadow: '0 6px 20px rgba(244, 63, 94, 0.4)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderWidth: '2px',
          borderColor: '#f43f5e',
          '&:hover': {
            borderWidth: '2px',
            background: 'rgba(244, 63, 94, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          background: 'linear-gradient(135deg, #18181b 0%, #09090b 100%)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(244, 63, 94, 0.2)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px) scale(1.02)',
            boxShadow: '0 12px 32px rgba(244, 63, 94, 0.3)',
            border: '1px solid rgba(244, 63, 94, 0.4)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, transparent 0%, rgba(244, 63, 94, 0.1) 50%, transparent 100%)',
            transform: 'translateX(-100%)',
            transition: 'transform 0.6s ease-in-out',
          },
          '&:hover::before': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#18181b',
        },
        elevation1: {
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(9, 9, 11, 0.95)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(244, 63, 94, 0.2)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#18181b',
          borderRight: '1px solid rgba(244, 63, 94, 0.2)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 4,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#f43f5e',
            },
            '& fieldset': {
              borderColor: 'rgba(244, 63, 94, 0.3)',
              borderWidth: '2px',
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(244, 63, 94, 0.2)',
        },
      },
    },
  },
});

export default gamingTheme;
