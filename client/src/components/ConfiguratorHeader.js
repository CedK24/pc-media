import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const CategoryBox = styled(Paper)(({ theme, active }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  cursor: 'pointer',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: active ? theme.palette.primary.main : theme.palette.background.paper,
  color: active ? theme.palette.primary.contrastText : theme.palette.text.primary,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
    backgroundColor: active ? theme.palette.primary.dark : theme.palette.grey[100],
  },
}));

const PriceDisplay = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '2rem',
  color: theme.palette.primary.main,
  textAlign: 'center',
  marginTop: theme.spacing(2),
}));

const ConfiguratorHeader = ({ selectedCategory, setSelectedCategory, totalPrice }) => {
  const theme = useTheme();
  const categories = [
    {
      name: 'Bureau',
      description: 'PC pour travail et bureautique',
      startingPrice: '439.93',
    },
    {
      name: 'Multimédia',
      description: 'PC pour divertissement et création',
      startingPrice: '699.99',
    },
    {
      name: 'Gaming',
      description: 'PC pour jeux vidéo performant',
      startingPrice: '999.99',
    },
    {
      name: 'Gaming Extrême',
      description: 'PC gaming haut de gamme',
      startingPrice: '1499.99',
    },
  ];

  return (
    <Box sx={{ mb: 6 }}>
      <Typography 
        variant="h3" 
        component="h1" 
        align="center" 
        sx={{ 
          fontWeight: 800,
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 1,
        }}
      >
        Configurateur PC
      </Typography>
      <Typography 
        variant="h6" 
        align="center" 
        color="text.secondary" 
        sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}
      >
        Créez votre PC sur mesure avec nos composants sélectionnés pour une performance optimale
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={3} key={category.name}>
            <CategoryBox
              active={selectedCategory === category.name}
              onClick={() => setSelectedCategory(category.name)}
              elevation={selectedCategory === category.name ? 8 : 1}
            >
              <Typography variant="h6" component="h2" gutterBottom>
                {category.name}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {category.description}
              </Typography>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  fontWeight: 'bold',
                  color: selectedCategory === category.name ? 'inherit' : theme.palette.primary.main 
                }}
              >
                À partir de {category.startingPrice}€
              </Typography>
            </CategoryBox>
          </Grid>
        ))}
      </Grid>

      {selectedCategory && (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h5" color="text.secondary">
            Prix total de votre configuration
          </Typography>
          <PriceDisplay>
            {totalPrice.toFixed(2)}€
          </PriceDisplay>
        </Box>
      )}
    </Box>
  );
};

export default ConfiguratorHeader;
