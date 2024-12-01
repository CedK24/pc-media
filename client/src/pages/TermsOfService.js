import React from 'react';
import { Container, Typography, Paper, useTheme } from '@mui/material';

const TermsOfService = () => {
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
        Conditions Générales d'Utilisation (CGU)
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
          1. Objet
        </Typography>
        <Typography paragraph>
          Les présentes CGU régissent l'utilisation du site PC-Media et définissent les conditions d'accès 
          et d'utilisation des services proposés sur le site.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          2. Accès au site
        </Typography>
        <Typography paragraph>
          L'accès au site est gratuit. L'utilisateur est responsable de son équipement informatique ainsi 
          que de son accès à Internet. Les frais correspondants restent à sa charge.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          3. Services proposés
        </Typography>
        <Typography paragraph>
          PC-Media propose des services de configuration, montage et réparation d'ordinateurs. La description 
          détaillée des services est disponible sur les pages correspondantes du site.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          4. Obligations de l'utilisateur
        </Typography>
        <Typography paragraph>
          L'utilisateur s'engage à :
          <br />- Utiliser le site conformément à sa destination
          <br />- Ne pas tenter de porter atteinte au bon fonctionnement du site
          <br />- Respecter les droits de propriété intellectuelle
          <br />- Fournir des informations exactes lors de l'utilisation des services
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          5. Propriété intellectuelle
        </Typography>
        <Typography paragraph>
          Tous les éléments du site sont protégés par le droit de la propriété intellectuelle. Toute 
          reproduction non autorisée constitue une contrefaçon sanctionnée par le Code de la propriété 
          intellectuelle.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          6. Modification des CGU
        </Typography>
        <Typography paragraph>
          PC-Media se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs 
          seront informés des modifications par une mention spéciale sur le site.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          7. Droit applicable et juridiction compétente
        </Typography>
        <Typography paragraph>
          Les présentes CGU sont soumises au droit français. Tout litige relatif à l'interprétation ou 
          l'exécution des présentes CGU relève de la compétence exclusive des tribunaux français.
        </Typography>
      </Paper>

      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4 }}>
        Dernière mise à jour : {new Date().toLocaleDateString()}
      </Typography>
    </Container>
  );
};

export default TermsOfService;
