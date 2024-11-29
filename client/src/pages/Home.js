import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, CardActions, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { services } from '../data/services';
import HeroBanner from '../components/HeroBanner';
import ElfsightReviews from '../components/ElfsightReviews';

// Afficher tous les services disponibles
const featuredServices = [
  'reparation',
  'maintenance',
  'securite',
  'reseaux',
  'serveurs',
  'cloud',
  'performance',
  'pc-bureau-multimedia'
];

const Home = () => {
  const theme = useTheme();
  
  const displayedServices = services
    .filter(service => featuredServices.includes(service.id))
    .map(service => ({
      ...service,
      description: service.shortDescription,
      highlight: service.id === 'reparation'
    }));

  return (
    <Box>
      {/* Hero Section */}
      <HeroBanner />

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: theme.palette.mode === 'dark' 
                ? `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`
                : `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.secondary.dark} 90%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: theme.palette.mode === 'dark' ? '0 0 30px rgba(244, 63, 94, 0.3)' : 'none',
            }}
          >
            Support Informatique Professionnel
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Solutions expertes pour tous vos besoins informatiques<br />
            Support technique disponible 6j/7
          </Typography>
        </Box>

        {/* Nos Services Section */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{
              fontWeight: 700,
              color: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.dark,
            }}
          >
            Nos Services
          </Typography>
          <Typography 
            variant="h6" 
            align="center" 
            color="text.secondary" 
            gutterBottom 
            sx={{ mb: 6 }}
          >
            Solutions informatiques complètes pour particuliers et professionnels
          </Typography>
          <Grid container spacing={4}>
            {displayedServices.map((service) => {
              const Icon = service.icon;
              return (
                <Grid item xs={12} sm={6} md={4} key={service.id}>
                  <Card 
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      transition: 'all 0.3s ease-in-out',
                      background: theme.palette.mode === 'dark' 
                        ? 'linear-gradient(135deg, rgba(24, 24, 27, 0.8) 0%, rgba(9, 9, 11, 0.9) 100%)'
                        : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(241, 245, 249, 0.9) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${theme.palette.mode === 'dark' 
                        ? 'rgba(244, 63, 94, 0.2)'
                        : 'rgba(37, 99, 235, 0.2)'}`,
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.02)',
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 12px 32px rgba(244, 63, 94, 0.3)'
                          : '0 12px 32px rgba(37, 99, 235, 0.2)',
                        border: `1px solid ${theme.palette.mode === 'dark'
                          ? 'rgba(244, 63, 94, 0.4)'
                          : 'rgba(37, 99, 235, 0.4)'}`,
                      }
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Icon sx={{ 
                          fontSize: 40, 
                          mr: 2, 
                          color: theme.palette.mode === 'dark' 
                            ? theme.palette.primary.main 
                            : theme.palette.primary.dark 
                        }} />
                        <Typography 
                          variant="h5" 
                          component="h3" 
                          sx={{ 
                            fontWeight: 600,
                            color: theme.palette.mode === 'dark' 
                              ? theme.palette.primary.light 
                              : theme.palette.primary.dark
                          }}
                        >
                          {service.title}
                        </Typography>
                      </Box>
                      <Typography variant="body1" color="text.secondary" paragraph>
                        {service.description}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Typography 
                          variant="subtitle2" 
                          sx={{ 
                            color: theme.palette.mode === 'dark' 
                              ? theme.palette.primary.light 
                              : theme.palette.primary.dark,
                            fontWeight: 600
                          }} 
                          gutterBottom
                        >
                          Inclus :
                        </Typography>
                        <Typography 
                          variant="body2" 
                          color="text.secondary" 
                          component="ul" 
                          sx={{ pl: 2 }}
                        >
                          {service.details.slice(0, 3).map((detail, index) => (
                            <li key={index}>{detail}</li>
                          ))}
                        </Typography>
                      </Box>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button
                        component={Link}
                        to={`/services/${service.id}`}
                        endIcon={<ArrowForwardIcon />}
                        variant="contained"
                        fullWidth
                        sx={{
                          background: theme.palette.mode === 'dark'
                            ? 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)'
                            : 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                          boxShadow: theme.palette.mode === 'dark'
                            ? '0 4px 16px rgba(244, 63, 94, 0.3)'
                            : '0 4px 16px rgba(37, 99, 235, 0.3)',
                          '&:hover': {
                            background: theme.palette.mode === 'dark'
                              ? 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)'
                              : 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
                            boxShadow: theme.palette.mode === 'dark'
                              ? '0 6px 20px rgba(244, 63, 94, 0.4)'
                              : '0 6px 20px rgba(37, 99, 235, 0.4)',
                            transform: 'translateY(-2px)',
                          }
                        }}
                      >
                        En savoir plus
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Features Section */}
        <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
          <Container maxWidth="lg">
            <Typography variant="h3" component="h2" align="center" gutterBottom>
              Pourquoi nous choisir ?
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" gutterBottom sx={{ mb: 6 }}>
              Une expertise reconnue au service de votre satisfaction
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  title: 'Expertise Technique',
                  description: 'Une équipe de techniciens certifiés avec plus de 10 ans d\'expérience'
                },
                {
                  title: 'Réactivité',
                  description: 'Intervention rapide et efficace pour minimiser l\'impact sur votre activité'
                },
                {
                  title: 'Transparence',
                  description: 'Des tarifs clairs et des devis détaillés sans surprise'
                },
                {
                  title: 'Satisfaction Client',
                  description: 'Un suivi personnalisé et des solutions adaptées à vos besoins'
                }
              ].map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                    <Typography variant="h5" component="h3" gutterBottom color="primary">
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Section Avis Elfsight */}
        <ElfsightReviews />
      </Container>
    </Box>
  );
};

export default Home;
