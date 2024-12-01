import React from 'react';
import { Container, Typography, Paper, Box, Divider } from '@mui/material';

const LegalNotice = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        align="center"
        sx={{
          fontWeight: 700,
          mb: 6,
          background: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Mentions Légales
      </Typography>

      <Paper elevation={1} sx={{ p: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            1. Informations légales
          </Typography>
          <Typography paragraph>
            PC-Média@<br />
            Forme juridique : [Type d'entreprise]<br />
            Capital social : [Montant] €<br />
            SIRET : [Numéro SIRET]<br />
            Siège social : Rue des Pinsons, 24660 SANILHAC<br />
            Téléphone : 07 49 29 21 10<br />
            Email : pcmedia24@gmail.com
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            2. Directeur de la publication
          </Typography>
          <Typography paragraph>
            [Nom du directeur de la publication]<br />
            En qualité de [Fonction]
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            3. Hébergement
          </Typography>
          <Typography paragraph>
            Ce site est hébergé par :<br />
            [Nom de l'hébergeur]<br />
            [Adresse de l'hébergeur]<br />
            [Contact de l'hébergeur]
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            4. Propriété intellectuelle
          </Typography>
          <Typography paragraph>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            5. Protection des données personnelles
          </Typography>
          <Typography paragraph>
            Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
          </Typography>
          <Typography paragraph>
            Pour exercer ces droits ou pour toute question sur le traitement de vos données, vous pouvez nous contacter à l'adresse suivante : contact@pc-media.fr
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            6. Cookies
          </Typography>
          <Typography paragraph>
            Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez paramétrer votre navigateur pour refuser les cookies ou être alerté lors de leur utilisation.
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box>
          <Typography variant="h5" gutterBottom>
            7. Modification des mentions légales
          </Typography>
          <Typography paragraph>
            PC-Média@ se réserve le droit de modifier les présentes mentions légales à tout moment. L'utilisateur est invité à les consulter régulièrement.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Dernière mise à jour : {new Date().toLocaleDateString()}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default LegalNotice;
