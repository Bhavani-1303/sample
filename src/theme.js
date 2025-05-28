import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Example primary color (Material Design blue)
    },
    secondary: {
      main: '#dc004e', // Example secondary color (Material Design pink)
    },
    background: {
      default: '#f4f6f8', // A light grey background
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // More rounded cards
        }
      }
    }
  }
});

export default theme;
