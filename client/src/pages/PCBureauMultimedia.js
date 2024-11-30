import React from 'react';
import { Container, Typography, Grid, Box, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ComputerIcon from '@mui/icons-material/Computer';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import { useTheme } from '@mui/material/styles';

const MotionPaper = motion(Paper);

const PCBureauMultimedia = () => {
  const theme = useTheme();

  const sections = [
    {
      title: 'PC Bureau sur Mesure',
      icon: ComputerIcon,
      description: 'Configuration et assemblage de PC bureau personnalisé selon vos besoins',
      features: [
        'Conseil personnalisé sur les composants',
        'Assemblage professionnel',
        'Test de performance',
        'Installation système et logiciels',
        'Garantie pièces et main d\'œuvre'
      ]
    },
    {
      title: 'Solutions Multimédia',
      icon: DevicesOtherIcon,
      description: 'Équipements et installations multimédia pour une expérience immersive',
      features: [
        'Home cinéma et systèmes audio',
        'Streaming et diffusion',
        'Configuration réseau multimédia',
        'Solutions de stockage média',
        'Connectivité sans fil'
      ]
    },
    {
      title: 'Support Technique',
      icon: HeadsetMicIcon,
      description: 'Assistance et maintenance pour vos équipements',
      features: [
        'Dépannage à distance',
        'Maintenance préventive',
        'Mises à jour système',
        'Optimisation des performances',
        'Formation utilisateur'
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
        sx={{ mb: 6 }}
      >
        PC Bureau & Multimédia
      </Typography>

      <Grid container spacing={4}>
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <Grid item xs={12} md={4} key={section.title}>
              <MotionPaper
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                sx={{
                  height: '100%',
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  boxShadow: theme.shadows[3],
                  '&:hover': {
                    boxShadow: theme.shadows[6],
                    transform: 'translateY(-4px)',
                    transition: 'all 0.3s ease-in-out',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 3,
                  }}
                >
                  <Icon sx={{ fontSize: 48, color: 'primary.main' }} />
                </Box>
                <Typography variant="h5" component="h2" align="center" gutterBottom>
                  {section.title}
                </Typography>
                <Typography color="text.secondary" paragraph align="center">
                  {section.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {section.features.map((feature, featureIndex) => (
                    <Typography
                      key={featureIndex}
                      component="div"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1,
                        '&:before': {
                          content: '""',
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                          mr: 2,
                        },
                      }}
                    >
                      {feature}
                    </Typography>
                  ))}
                </Box>
                <Box sx={{ mt: 'auto', pt: 2 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 2,
                      bgcolor: 'primary.main',
                      color: 'primary.contrastText',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                    }}
                  >
                    En savoir plus
                  </Button>
                </Box>
              </MotionPaper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default PCBureauMultimedia;
