import React from 'react';
import { Container, Typography, Paper, useTheme } from '@mui/material';

const SalesConditions = () => {
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
        Conditions Générales de Vente (CGV)
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
          1. Objet et champ d'application
        </Typography>
        <Typography paragraph>
          Les présentes CGV régissent les relations contractuelles entre PC-Media et ses clients, 
          concernant la vente de produits et services informatiques.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          2. Prix et paiement
        </Typography>
        <Typography paragraph>
          Les prix sont indiqués en euros TTC. Le paiement s'effectue selon les modalités suivantes :
          <br />- Carte bancaire
          <br />- Virement bancaire
          <br />- Autres moyens de paiement acceptés
          <br />
          Un acompte peut être demandé pour certaines prestations.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          3. Commandes et exécution
        </Typography>
        <Typography paragraph>
          Toute commande est ferme et définitive après confirmation écrite et paiement de l'acompte le 
          cas échéant. Les délais d'exécution sont donnés à titre indicatif.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          4. Garanties
        </Typography>
        <Typography paragraph>
          Nos prestations sont garanties selon les conditions suivantes :
          <br />- Conformité aux spécifications convenues
          <br />- Respect des règles de l'art
          <br />- Garantie légale de conformité
          <br />- Garantie des vices cachés
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          5. Responsabilité
        </Typography>
        <Typography paragraph>
          PC-Media s'engage à exécuter ses prestations avec diligence et professionnalisme. Notre 
          responsabilité est limitée aux dommages directs et prévisibles résultant d'une faute prouvée.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          6. Droit de rétractation
        </Typography>
        <Typography paragraph>
          Pour les ventes à distance, le client dispose d'un délai de 14 jours pour exercer son droit 
          de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          7. Propriété intellectuelle
        </Typography>
        <Typography paragraph>
          PC-Media reste propriétaire de tous les droits de propriété intellectuelle sur les études, 
          dessins, modèles, prototypes, etc., réalisés en vue de la fourniture des services au client.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          8. Protection des données
        </Typography>
        <Typography paragraph>
          Les données personnelles collectées sont traitées conformément à notre politique de 
          confidentialité, disponible sur notre site.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          9. Litiges
        </Typography>
        <Typography paragraph>
          En cas de litige, une solution amiable sera recherchée. À défaut, les tribunaux français 
          seront seuls compétents.
        </Typography>
      </Paper>

      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4 }}>
        Dernière mise à jour : {new Date().toLocaleDateString()}
      </Typography>
    </Container>
  );
};

export default SalesConditions;
