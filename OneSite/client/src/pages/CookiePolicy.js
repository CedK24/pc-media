import React from 'react';
import { Container, Typography, Paper, useTheme } from '@mui/material';

const CookiePolicy = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography 
        variant="h2" 
        component="h1" 
        gutterBottom
        sx={{
          fontWeight: 700,
          mb: 4,
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(45deg, #f43f5e 30%, #ec4899 90%)'
            : 'linear-gradient(45deg, #2563eb 30%, #3b82f6 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Politique des Cookies
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
          1. Qu'est-ce qu'un cookie ?
        </Typography>
        <Typography paragraph>
          Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) 
          lors de votre visite sur notre site. Il permet de stocker des informations relatives à votre 
          navigation et de vous offrir une expérience personnalisée.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          2. Les cookies que nous utilisons
        </Typography>
        <Typography paragraph>
          Notre site utilise différents types de cookies :
          <br />- Cookies essentiels : nécessaires au fonctionnement du site
          <br />- Cookies analytiques : pour comprendre l'utilisation du site
          <br />- Cookies de personnalisation : pour améliorer votre expérience
          <br />- Cookies de performance : pour optimiser le site
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          3. Durée de conservation
        </Typography>
        <Typography paragraph>
          Les cookies peuvent être :
          <br />- Temporaires (supprimés à la fermeture du navigateur)
          <br />- Permanents (durée maximale de 13 mois)
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          4. Gestion des cookies
        </Typography>
        <Typography paragraph>
          Vous pouvez à tout moment :
          <br />- Accepter ou refuser les cookies
          <br />- Modifier vos préférences
          <br />- Supprimer les cookies existants
          <br />
          Pour cela, consultez les paramètres de votre navigateur.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          5. Impact du refus des cookies
        </Typography>
        <Typography paragraph>
          Le refus de certains cookies peut impacter votre expérience sur le site et limiter l'accès à 
          certaines fonctionnalités.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          6. Cookies tiers
        </Typography>
        <Typography paragraph>
          Notre site peut contenir des cookies déposés par des services tiers (Google Analytics, réseaux 
          sociaux, etc.). Nous n'avons aucun contrôle sur ces cookies.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          7. Modifications
        </Typography>
        <Typography paragraph>
          PC-Media se réserve le droit de modifier cette politique des cookies à tout moment. Les 
          modifications entrent en vigueur dès leur publication sur le site.
        </Typography>
      </Paper>

      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4 }}>
        Dernière mise à jour : {new Date().toLocaleDateString()}
      </Typography>
    </Container>
  );
};

export default CookiePolicy;
