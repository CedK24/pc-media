import React from 'react';
import { Container, Typography, Paper, useTheme } from '@mui/material';

const PrivacyPolicy = () => {
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
        Politique de Confidentialité (RGPD)
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
          1. Collecte des données personnelles
        </Typography>
        <Typography paragraph>
          PC-Media collecte les données personnelles suivantes :
          <br />- Nom et prénom
          <br />- Adresse email
          <br />- Numéro de téléphone
          <br />- Adresse postale (pour les interventions à domicile)
          <br />
          Ces données sont collectées uniquement avec votre consentement explicite.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          2. Utilisation des données
        </Typography>
        <Typography paragraph>
          Vos données personnelles sont utilisées pour :
          <br />- La gestion de votre compte client
          <br />- Le traitement de vos commandes
          <br />- L'envoi d'informations relatives à nos services
          <br />- L'amélioration de nos services
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          3. Protection des données
        </Typography>
        <Typography paragraph>
          PC-Media met en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles 
          contre tout accès, modification, divulgation ou destruction non autorisée.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          4. Durée de conservation
        </Typography>
        <Typography paragraph>
          Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles 
          elles sont collectées et traitées. Cette durée n'excède pas 3 ans après votre dernière interaction 
          avec nos services.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          5. Vos droits
        </Typography>
        <Typography paragraph>
          Conformément au RGPD, vous disposez des droits suivants :
          <br />- Droit d'accès à vos données
          <br />- Droit de rectification
          <br />- Droit à l'effacement
          <br />- Droit à la limitation du traitement
          <br />- Droit à la portabilité
          <br />- Droit d'opposition
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          6. Contact
        </Typography>
        <Typography paragraph>
          Pour exercer vos droits ou pour toute question concernant le traitement de vos données personnelles, 
          vous pouvez nous contacter à l'adresse suivante : [email de contact]
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          7. Modifications
        </Typography>
        <Typography paragraph>
          PC-Media se réserve le droit de modifier la présente politique de confidentialité à tout moment. 
          Les modifications entrent en vigueur dès leur publication sur le site.
        </Typography>
      </Paper>

      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4 }}>
        Dernière mise à jour : {new Date().toLocaleDateString()}
      </Typography>
    </Container>
  );
};

export default PrivacyPolicy;
