import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HomeIcon from '@mui/icons-material/Home';

const NotFound = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <ErrorOutlineIcon sx={{ fontSize: 100, color: 'error.main', mb: 4 }} />
        <Typography variant="h3" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Page non trouvée
        </Typography>
        <Typography color="text.secondary" paragraph>
          La page que vous recherchez n'existe pas ou a été déplacée.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          startIcon={<HomeIcon />}
          size="large"
          sx={{ mt: 2 }}
        >
          Retour à l'accueil
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
