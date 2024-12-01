import React, { useState } from 'react';
import { Container, Typography, Grid, Box, Paper, Dialog, DialogTitle, DialogContent, DialogActions, Button, useMediaQuery, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import ComputerIcon from '@mui/icons-material/Computer';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const MotionPaper = motion(Paper);

const PCBureauMultimedia = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const handleClickOpen = (section) => {
    setSelectedSection(section);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

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
      ],
      detailedDescription: `Nous vous accompagnons dans la création de votre PC idéal. Notre service comprend :
        • Une analyse approfondie de vos besoins
        • La sélection des meilleurs composants dans votre budget
        • L'assemblage professionnel avec tests complets
        • L'installation de votre système d'exploitation et logiciels
        • Une garantie complète sur l'ensemble
        
        Contactez-nous pour obtenir un devis personnalisé !`,
      actionLink: '/configurateur'
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
      ],
      detailedDescription: `Transformez votre espace avec nos solutions multimédia complètes :
        • Installation de systèmes home cinéma sur mesure
        • Configuration de solutions de streaming optimisées
        • Mise en place de réseaux multimédia performants
        • Solutions de stockage adaptées à vos besoins
        • Installation et configuration de systèmes sans fil
        
        Découvrez nos offres personnalisées !`,
      actionLink: '/services'
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
      ],
      detailedDescription: `Notre support technique professionnel vous accompagne :
        • Service de dépannage rapide et efficace
        • Programmes de maintenance préventive
        • Mises à jour et optimisations régulières
        • Formation et accompagnement personnalisé
        • Support à distance disponible
        
        Contactez notre équipe pour plus d'informations !`,
      actionLink: '/contact'
    }
  ];

  return (
    <>
      <Helmet>
        <title>PC Bureau & Multimédia - PC-Media Périgueux</title>
        <meta name="description" content="Expert en configuration et assemblage de PC Bureau sur mesure à Périgueux. Solutions multimédia complètes et support technique professionnel." />
        <meta name="keywords" content="PC Bureau, Multimédia, Configuration PC, Périgueux, Assemblage PC, Support Technique" />
      </Helmet>
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
                      onClick={() => handleClickOpen(section)}
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

      <Dialog
        fullScreen={fullScreen}
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="section-dialog-title"
        maxWidth="md"
        PaperProps={{
          sx: {
            bgcolor: 'background.paper',
            borderRadius: 2,
            p: 2,
          },
        }}
      >
        {selectedSection && (
          <>
            <DialogTitle id="section-dialog-title" sx={{ pr: 6 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {React.createElement(selectedSection.icon, { sx: { fontSize: 32, color: 'primary.main' } })}
                <Typography variant="h5" component="span">
                  {selectedSection.title}
                </Typography>
              </Box>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: 'text.secondary',
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-line' }}>
                {selectedSection.detailedDescription}
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Caractéristiques principales :
                </Typography>
                <Grid container spacing={2}>
                  {selectedSection.features.map((feature, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                          }}
                        />
                        <Typography>{feature}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </DialogContent>
            <DialogActions sx={{ p: 2, gap: 2 }}>
              <Button onClick={handleClose} color="inherit">
                Fermer
              </Button>
              <Button
                component={Link}
                to={selectedSection.actionLink}
                variant="contained"
                color="primary"
                onClick={handleClose}
              >
                {selectedSection.title === 'PC Bureau sur Mesure' ? 'Configurer mon PC' :
                 selectedSection.title === 'Solutions Multimédia' ? 'Voir nos services' :
                 'Nous contacter'}
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};

export default PCBureauMultimedia;
