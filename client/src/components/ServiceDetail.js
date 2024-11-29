import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Grid,
  Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SpeedIcon from '@mui/icons-material/Speed';

const ServiceDetail = ({ service }) => {
  if (!service) return null;

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Button
        component={Link}
        to="/services"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 4 }}
      >
        Retour aux services
      </Button>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom>
              {service.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              {service.description}
            </Typography>
          </Box>

          <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Ce que nous proposons
            </Typography>
            <List>
              {service.details.map((detail, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={detail} />
                </ListItem>
              ))}
            </List>
          </Paper>

          {service.additionalInfo && (
            <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                Informations complémentaires
              </Typography>
              <Typography paragraph>
                {service.additionalInfo}
              </Typography>
            </Paper>
          )}
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Prendre rendez-vous
            </Typography>
            <Typography paragraph>
              Planifiez une intervention avec nos experts qualifiés.
            </Typography>
            <Button
              component={Link}
              to="/rendez-vous"
              variant="contained"
              fullWidth
              sx={{ mb: 2 }}
            >
              Réserver maintenant
            </Button>
          </Paper>

          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Besoin urgent ?
            </Typography>
            <Typography paragraph>
              Notre équipe est disponible pour les interventions d'urgence.
            </Typography>
            <Button
              component={Link}
              to="/urgence"
              variant="contained"
              color="error"
              fullWidth
              startIcon={<SpeedIcon />}
            >
              Intervention immédiate
            </Button>
          </Paper>
        </Grid>
      </Grid>

      <Divider sx={{ my: 6 }} />

      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Vous avez des questions ?
        </Typography>
        <Typography paragraph color="text.secondary">
          Notre équipe est là pour vous aider et répondre à toutes vos questions.
        </Typography>
        <Button
          component={Link}
          to="/contact"
          variant="outlined"
          size="large"
        >
          Contactez-nous
        </Button>
      </Box>
    </Container>
  );
};

export default ServiceDetail;
