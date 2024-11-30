import React from 'react';
import { useParams, Link } from 'react-router-dom';
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
  useTheme,
  useMediaQuery,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { services } from '../data/services';

const ServicePage = () => {
  const { id } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <Container maxWidth="lg" sx={{ py: 6, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Service non trouvé
        </Typography>
        <Typography variant="body1" paragraph>
          Désolé, le service que vous recherchez n'existe pas ou a été déplacé.
        </Typography>
        <Button
          component={Link}
          to="/services"
          startIcon={<ArrowBackIcon />}
          variant="contained"
          sx={{
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)'
              : 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
            '&:hover': {
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)'
                : 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
            }
          }}
        >
          Retour aux services
        </Button>
      </Container>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 }, px: { xs: 2, sm: 3, md: 4 } }}>
      <Button
        component={Link}
        to="/services"
        startIcon={<ArrowBackIcon />}
        sx={{
          mb: 4,
          borderWidth: '2px',
          borderColor: theme.palette.mode === 'dark'
            ? 'rgba(244, 63, 94, 0.5)'
            : 'rgba(37, 99, 235, 0.5)',
          '&:hover': {
            borderWidth: '2px',
            borderColor: theme.palette.mode === 'dark'
              ? 'rgba(244, 63, 94, 0.8)'
              : 'rgba(37, 99, 235, 0.8)',
            background: theme.palette.mode === 'dark'
              ? 'rgba(244, 63, 94, 0.1)'
              : 'rgba(37, 99, 235, 0.1)',
          }
        }}
        variant="outlined"
      >
        Retour aux services
      </Button>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box sx={{ mb: 4 }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              mb: 2,
              gap: 2,
              flexWrap: 'wrap'
            }}>
              <ServiceIcon sx={{ 
                fontSize: { xs: 40, md: 48 },
                color: theme.palette.mode === 'dark'
                  ? theme.palette.primary.main
                  : theme.palette.primary.dark
              }} />
              <Typography 
                variant={isMobile ? "h4" : "h3"}
                component="h1"
                sx={{
                  fontWeight: 700,
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, #f43f5e 0%, #ec4899 90%)'
                    : 'linear-gradient(135deg, #2563eb 0%, #3b82f6 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {service.title}
              </Typography>
            </Box>

            <Typography 
              variant="h6" 
              sx={{ 
                mb: 3,
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.25rem' }
              }}
            >
              {service.description}
            </Typography>

            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                color: 'text.primary',
                fontSize: { xs: '0.9rem', md: '1rem' },
                lineHeight: 1.8
              }}
            >
              {service.longDescription}
            </Typography>
          </Box>

          <Paper 
            elevation={3} 
            sx={{ 
              p: { xs: 2, md: 4 },
              background: theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, 0.05)'
                : 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <Typography 
              variant="h5" 
              gutterBottom
              sx={{ 
                fontWeight: 600,
                mb: 3,
                fontSize: { xs: '1.25rem', md: '1.5rem' }
              }}
            >
              Ce service comprend :
            </Typography>
            <List>
              {service.features.map((feature, index) => (
                <ListItem 
                  key={index}
                  sx={{ 
                    py: { xs: 1, md: 1.5 },
                    px: { xs: 1, md: 2 }
                  }}
                >
                  <ListItemIcon>
                    <CheckCircleIcon 
                      sx={{ 
                        color: theme.palette.mode === 'dark' 
                          ? theme.palette.primary.main
                          : theme.palette.primary.dark,
                        fontSize: { xs: 20, md: 24 }
                      }} 
                    />
                  </ListItemIcon>
                  <ListItemText 
                    primary={feature}
                    primaryTypographyProps={{
                      sx: { 
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        fontWeight: 500
                      }
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper 
            elevation={3}
            sx={{
              p: { xs: 2, md: 4 },
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, rgba(244, 63, 94, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)'
                : 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${
                theme.palette.mode === 'dark'
                  ? 'rgba(244, 63, 94, 0.2)'
                  : 'rgba(37, 99, 235, 0.2)'
              }`,
              position: 'sticky',
              top: 100
            }}
          >
            <Typography 
              variant="h5" 
              gutterBottom
              sx={{ 
                fontWeight: 600,
                mb: 3,
                fontSize: { xs: '1.25rem', md: '1.5rem' }
              }}
            >
              Intéressé par ce service ?
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ 
                color: 'text.secondary',
                fontSize: { xs: '0.9rem', md: '1rem' }
              }}
            >
              Prenez rendez-vous dès maintenant pour discuter de votre projet ou obtenir un devis personnalisé.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row', md: 'column' } }}>
              <Button
                variant="contained"
                component={Link}
                to="/rendez-vous"
                fullWidth
                sx={{
                  py: 1.5,
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)'
                    : 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  '&:hover': {
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)'
                      : 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
                  }
                }}
              >
                Prendre rendez-vous
              </Button>
              <Button
                variant="outlined"
                component={Link}
                to="/contact"
                fullWidth
                sx={{
                  py: 1.5,
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px'
                  }
                }}
              >
                Nous contacter
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServicePage;
