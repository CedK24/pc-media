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
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { services } from '../data/services';

const ServicePage = () => {
  const { id } = useParams();
  const theme = useTheme();
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
    <Container maxWidth="lg" sx={{ py: 6 }}>
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
                fontSize: 48,
                color: theme.palette.mode === 'dark'
                  ? theme.palette.primary.main
                  : theme.palette.primary.dark
              }} />
              <Typography 
                variant="h3" 
                component="h1"
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
                {service.title}
              </Typography>
            </Box>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              paragraph
              sx={{ 
                fontSize: '1.25rem',
                lineHeight: 1.6
              }}
            >
              {service.description}
            </Typography>
          </Box>

          <Paper 
            elevation={theme.palette.mode === 'dark' ? 8 : 2}
            sx={{ 
              p: 4, 
              mb: 4,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, rgba(24, 24, 27, 0.8) 0%, rgba(9, 9, 11, 0.9) 100%)'
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(241, 245, 249, 0.9) 100%)',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${theme.palette.mode === 'dark'
                ? 'rgba(244, 63, 94, 0.2)'
                : 'rgba(37, 99, 235, 0.2)'}`,
            }}
          >
            <Typography 
              variant="h5" 
              gutterBottom
              sx={{
                fontWeight: 600,
                color: theme.palette.mode === 'dark'
                  ? theme.palette.primary.light
                  : theme.palette.primary.dark,
              }}
            >
              Ce que nous proposons
            </Typography>
            <List>
              {service.details.map((detail, index) => (
                <ListItem 
                  key={index}
                  sx={{
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateX(8px)',
                      background: theme.palette.mode === 'dark'
                        ? 'rgba(244, 63, 94, 0.1)'
                        : 'rgba(37, 99, 235, 0.1)',
                    }
                  }}
                >
                  <ListItemIcon>
                    <CheckCircleIcon 
                      sx={{ 
                        color: theme.palette.mode === 'dark'
                          ? theme.palette.primary.main
                          : theme.palette.primary.dark
                      }} 
                    />
                  </ListItemIcon>
                  <ListItemText 
                    primary={detail}
                    primaryTypographyProps={{
                      sx: {
                        fontSize: '1.1rem',
                        fontWeight: 500
                      }
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>

          {service.additionalInfo && (
            <Paper 
              elevation={theme.palette.mode === 'dark' ? 8 : 2}
              sx={{ 
                p: 4,
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, rgba(24, 24, 27, 0.8) 0%, rgba(9, 9, 11, 0.9) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(241, 245, 249, 0.9) 100%)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${theme.palette.mode === 'dark'
                  ? 'rgba(244, 63, 94, 0.2)'
                  : 'rgba(37, 99, 235, 0.2)'}`,
              }}
            >
              <Typography 
                variant="h5" 
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: theme.palette.mode === 'dark'
                    ? theme.palette.primary.light
                    : theme.palette.primary.dark,
                }}
              >
                Informations complémentaires
              </Typography>
              <Typography 
                sx={{ 
                  fontSize: '1.1rem',
                  lineHeight: 1.6
                }}
              >
                {service.additionalInfo}
              </Typography>
            </Paper>
          )}
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper 
            elevation={theme.palette.mode === 'dark' ? 8 : 2}
            sx={{ 
              p: 4,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, rgba(24, 24, 27, 0.8) 0%, rgba(9, 9, 11, 0.9) 100%)'
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(241, 245, 249, 0.9) 100%)',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${theme.palette.mode === 'dark'
                ? 'rgba(244, 63, 94, 0.2)'
                : 'rgba(37, 99, 235, 0.2)'}`,
            }}
          >
            <Typography 
              variant="h5" 
              gutterBottom
              sx={{
                fontWeight: 600,
                color: theme.palette.mode === 'dark'
                  ? theme.palette.primary.light
                  : theme.palette.primary.dark,
              }}
            >
              Besoin d'assistance ?
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem' }}>
              Contactez-nous pour obtenir un devis personnalisé ou pour toute question concernant nos services.
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              fullWidth
              sx={{
                py: 1.5,
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
              Nous contacter
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServicePage;
