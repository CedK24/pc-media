import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import ComputerIcon from '@mui/icons-material/Computer';
import BuildIcon from '@mui/icons-material/Build';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const HeroBox = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: theme.palette.common.white,
  position: 'relative',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url(/images/pattern.svg) repeat',
    opacity: 0.1,
  },
}));

const StyledFeatureBox = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    background: 'rgba(255, 255, 255, 0.15)',
  },
}));

const features = [
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40, color: 'white', mb: 2 }} />,
    title: 'Support Expert',
    description: 'Une équipe de professionnels qualifiés à votre service'
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 40, color: 'white', mb: 2 }} />,
    title: 'Disponibilité 6j/7',
    description: 'Support technique disponible du lundi au samedi'
  },
  {
    icon: <BuildIcon sx={{ fontSize: 40, color: 'white', mb: 2 }} />,
    title: 'Solutions Complètes',
    description: 'Réparation, maintenance, et optimisation de vos systèmes'
  }
];

const HeroBanner = () => {
  return (
    <HeroBox>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={8} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                fontWeight: 800,
                letterSpacing: '-0.5px',
                lineHeight: 1.2,
                mb: 3,
                background: 'linear-gradient(45deg, #ffffff 30%, #e0e0e0 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Support Informatique Professionnel
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
                fontWeight: 400,
                lineHeight: 1.6,
                mb: 4,
                color: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              Solutions expertes pour tous vos besoins informatiques
              <br />
              Support technique disponible 6j/7
            </Typography>
            <Box 
              sx={{ 
                display: 'flex', 
                gap: 3, 
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}
            >
              <Button
                component={Link}
                to="/rendez-vous"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'common.white',
                  color: 'primary.main',
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: 'grey.100',
                  },
                }}
                startIcon={<ComputerIcon />}
              >
                Prendre RDV
              </Button>
              <Button
                component={Link}
                to="/urgence"
                variant="contained"
                color="error"
                size="large"
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                }}
                startIcon={<BuildIcon />}
              >
                Intervention Urgente
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ mt: { xs: 6, md: 8 } }}>
              <Grid container spacing={3} justifyContent="center">
                {features.map((feature, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <StyledFeatureBox>
                      {feature.icon}
                      <Typography
                        variant="h6"
                        sx={{ 
                          mb: 1, 
                          color: 'white',
                          fontWeight: 600,
                          fontSize: { xs: '1.1rem', sm: '1.25rem' }
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontSize: { xs: '0.9rem', sm: '1rem' }
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </StyledFeatureBox>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </HeroBox>
  );
};

export default HeroBanner;
