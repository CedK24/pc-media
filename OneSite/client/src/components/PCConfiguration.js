import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const ComponentSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  '&:hover': {
    boxShadow: theme.shadows[4],
    transition: 'box-shadow 0.3s ease-in-out',
  },
}));

const ComponentTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
  fontWeight: 'bold',
}));

const PCConfiguration = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
        Configuration PC Performant
      </Typography>
      
      <Typography variant="body1" gutterBottom sx={{ mb: 4 }} align="center">
        Cette fiche de configuration présente les composants nécessaires pour assembler un PC performant.
        Tous les liens de produits redirigent vers notre boutique partenaire Amazon.
      </Typography>

      <Grid container spacing={3}>
        {/* Processeur */}
        <Grid item xs={12} md={6}>
          <ComponentSection elevation={2}>
            <ComponentTitle variant="h6">
              Processeur
            </ComponentTitle>
            <List>
              <ListItem>
                <ListItemText 
                  primary="Modèle" 
                  secondary="Intel Core i3-12100F" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Génération" 
                  secondary="12ème génération" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Fréquence de base" 
                  secondary="3.3GHz" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Nombre de cœurs" 
                  secondary="4" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Socket" 
                  secondary="LGA1700" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Mémoire compatible" 
                  secondary="DDR4 et DDR5 jusqu'à 128GB" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Référence" 
                  secondary="BX8071512100F" 
                />
              </ListItem>
            </List>
          </ComponentSection>
        </Grid>

        {/* Carte Mère */}
        <Grid item xs={12} md={6}>
          <ComponentSection elevation={2}>
            <ComponentTitle variant="h6">
              Carte Mère
            </ComponentTitle>
            <List>
              <ListItem>
                <ListItemText 
                  primary="Modèle" 
                  secondary="MSI PRO H610M-E DDR4" 
                />
              </ListItem>
            </List>
          </ComponentSection>
        </Grid>

        {/* Mémoire RAM */}
        <Grid item xs={12} md={6}>
          <ComponentSection elevation={2}>
            <ComponentTitle variant="h6">
              Mémoire RAM
            </ComponentTitle>
            <List>
              <ListItem>
                <ListItemText 
                  primary="Modèle" 
                  secondary="CORSAIR VENGEANCE LPX DDR4" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Capacité" 
                  secondary="16GB (2x8GB)" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Fréquence" 
                  secondary="3200MHz" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Timings" 
                  secondary="CL16-20-20-38" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Tension" 
                  secondary="1.35V" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Compatibilité" 
                  secondary="Intel et AMD" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Référence" 
                  secondary="CMK16GX4M2E3200C16" 
                />
              </ListItem>
            </List>
          </ComponentSection>
        </Grid>

        {/* Stockage */}
        <Grid item xs={12} md={6}>
          <ComponentSection elevation={2}>
            <ComponentTitle variant="h6">
              Stockage
            </ComponentTitle>
            <List>
              <ListItem>
                <ListItemText 
                  primary="Modèle" 
                  secondary="Ediloca EN605 512GB M.2 SSD" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Type" 
                  secondary="SSD NVMe 1.3 PCIe Gen3 x4 TLC" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Format" 
                  secondary="M.2 2280" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Vitesse de lecture/écriture" 
                  secondary="Jusqu'à 2150/1600 MB/s" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Compatibilité" 
                  secondary="Laptop et PC de bureau" 
                />
              </ListItem>
            </List>
          </ComponentSection>
        </Grid>

        {/* Carte Graphique */}
        <Grid item xs={12} md={6}>
          <ComponentSection elevation={2}>
            <ComponentTitle variant="h6">
              Carte Graphique
            </ComponentTitle>
            <List>
              <ListItem>
                <ListItemText 
                  primary="Modèle" 
                  secondary="MSI GF GT 710 2GD3H LP" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Référence" 
                  secondary="GT_710_2GD3H_LP" 
                />
              </ListItem>
            </List>
          </ComponentSection>
        </Grid>

        {/* Boîtier */}
        <Grid item xs={12} md={6}>
          <ComponentSection elevation={2}>
            <ComponentTitle variant="h6">
              Boîtier
            </ComponentTitle>
            <List>
              <ListItem>
                <ListItemText 
                  primary="Modèle" 
                  secondary="Mars Gaming MC-X2 Black" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Type" 
                  secondary="Boîtier PC Gaming ATX" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Façade" 
                  secondary="Acier avec éclairage FRGB" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Ventilateurs" 
                  secondary="2 ventilateurs de 12cm avec éclairage FRGB" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Fenêtre" 
                  secondary="Latérale complète" 
                />
              </ListItem>
            </List>
          </ComponentSection>
        </Grid>

        {/* Alimentation */}
        <Grid item xs={12} md={6}>
          <ComponentSection elevation={2}>
            <ComponentTitle variant="h6">
              Alimentation
            </ComponentTitle>
            <List>
              <ListItem>
                <ListItemText 
                  primary="Modèle" 
                  secondary="MARSGAMING MPIII650" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Type" 
                  secondary="Alimentation PC ATX" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Puissance" 
                  secondary="650W" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Garantie" 
                  secondary="5 ans" 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Efficacité" 
                  secondary="85%" 
                />
              </ListItem>
            </List>
          </ComponentSection>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          href="https://tr.ee/2pECqB"
          target="_blank"
          sx={{
            padding: '12px 40px',
            fontSize: '1.1rem',
            '&:hover': {
              transform: 'scale(1.05)',
              transition: 'transform 0.2s ease-in-out',
            },
          }}
        >
          Finaliser
        </Button>
      </Box>
    </Container>
  );
};

export default PCConfiguration;
