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
    <Box sx={{ py: { xs: 6, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <Typography
            component="h1"
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            PC Bureau & Multimédia
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto', mb: 2 }}
          >
            Des solutions personnalisées pour votre environnement informatique et multimédia
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Grid item xs={12} md={4} key={section.title}>
                <MotionPaper
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[10],
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Icon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                    <Typography variant="h5" component="h2" gutterBottom>
                      {section.title}
                    </Typography>
                  </Box>
                  <Typography color="text.secondary" paragraph>
                    {section.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {section.features.map((feature, i) => (
                      <Typography
                        key={i}
                        component="div"
                        sx={{
                          py: 0.5,
                          display: 'flex',
                          alignItems: 'center',
                          '&:before': {
                            content: '"•"',
                            color: 'primary.main',
                            mr: 1,
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
                      href="/contact"
                      sx={{
                        mt: 2,
                        background: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
                      }}
                    >
                      Nous Contacter
                    </Button>
                  </Box>
                </MotionPaper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default PCBureauMultimedia;
