import React from 'react';
import { Container, Typography, Box, Paper, useTheme } from '@mui/material';

const LegalMentions = () => {
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
        Mentions Légales
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
          1. Informations légales
        </Typography>
        <Typography paragraph>
          Raison sociale : PC-Media
          <br />
          Forme juridique : [Forme juridique]
          <br />
          Siège social : [Adresse complète]
          <br />
          SIRET : [Numéro SIRET]
          <br />
          Capital social : [Montant]
          <br />
          Téléphone : [Numéro]
          <br />
          Email : [Email]
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          2. Hébergeur du site
        </Typography>
        <Typography paragraph>
          Le site PC-Media est hébergé par :
          <br />
          Vercel Inc.
          <br />
          340 S Lemon Ave #4133
          <br />
          Walnut, CA 91789
          <br />
          États-Unis
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          3. Propriété intellectuelle
        </Typography>
        <Typography paragraph>
          L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par le droit d'auteur. 
          Toute reproduction ou représentation, totale ou partielle, de ce site ou de son contenu est interdite 
          sans l'autorisation expresse de PC-Media.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          4. Responsabilité
        </Typography>
        <Typography paragraph>
          PC-Media s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. 
          Toutefois, PC-Media ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations 
          mises à disposition sur ce site.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          5. Droit applicable
        </Typography>
        <Typography paragraph>
          Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux 
          français seront seuls compétents.
        </Typography>
      </Paper>

      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4 }}>
        Dernière mise à jour : {new Date().toLocaleDateString()}
      </Typography>
    </Container>
  );
};

export default LegalMentions;
