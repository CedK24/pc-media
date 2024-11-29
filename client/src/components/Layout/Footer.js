import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
          opacity: 0.9,
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ 
              fontWeight: 700,
              letterSpacing: '0.02em',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
            }}>
              PC-Média@
            </Typography>
            <Typography variant="body2" sx={{ 
              opacity: 0.9,
              lineHeight: 1.8,
              maxWidth: 300 
            }}>
              Votre partenaire informatique de confiance à Sanilhac.
              Solutions expertes pour tous vos besoins informatiques.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ 
              fontWeight: 600,
              letterSpacing: '0.02em',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
            }}>
              Horaires d'ouverture
            </Typography>
            <Typography variant="body2" sx={{ 
              opacity: 0.9,
              lineHeight: 1.8 
            }}>
              Lundi - Vendredi : 9h - 18h<br />
              Samedi : 10h - 16h<br />
              Dimanche : Fermé<br />
              <Box component="span" sx={{ 
                mt: 1, 
                display: 'block',
                fontSize: '1.1rem',
                fontWeight: 500,
                letterSpacing: '0.02em',
                background: 'linear-gradient(45deg, #ffffff 30%, #e3f2fd 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
              }}>
                6j/7
              </Box>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ 
              fontWeight: 600,
              letterSpacing: '0.02em',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
            }}>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ 
              opacity: 0.9,
              lineHeight: 1.8 
            }}>
              <Box component="span" sx={{ display: 'block', mb: 1 }}>
                <PhoneIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: '1.2rem' }} />
                07 49 29 21 10
              </Box>
              <Box component="span" sx={{ display: 'block', mb: 1 }}>
                <EmailIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: '1.2rem' }} />
                pcmedia24@gmail.com
              </Box>
              <Box component="span" sx={{ display: 'block' }}>
                <LocationOnIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: '1.2rem' }} />
                Rue des Pinsons, 24660 SANILHAC
              </Box>
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ 
          mt: 6, 
          pt: 3, 
          borderTop: '1px solid rgba(255,255,255,0.1)',
          textAlign: 'center' 
        }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            {new Date().getFullYear()} PC-Média@. Tous droits réservés.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
