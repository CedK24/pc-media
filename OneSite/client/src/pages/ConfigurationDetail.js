import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  useTheme,
  alpha,
  Chip,
  Divider,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';
import { configurations } from '../data/configurations';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const DetailPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius * 2,
  background: theme.palette.mode === 'dark'
    ? alpha(theme.palette.background.paper, 0.8)
    : theme.palette.background.paper,
  backdropFilter: 'blur(10px)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
  animation: `${fadeIn} 0.6s ease-out forwards`,
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '500px',
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
  position: 'relative',
  marginBottom: theme.spacing(4),
  boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s ease',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)',
    pointerEvents: 'none',
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 3,
  padding: '16px 32px',
  fontWeight: 'bold',
  textTransform: 'none',
  fontSize: '1.1rem',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
  },
  '& .MuiSvgIcon-root': {
    marginRight: theme.spacing(1.5),
    fontSize: '1.5rem',
  },
}));

const FeatureChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  padding: theme.spacing(1.5),
  height: 'auto',
  borderRadius: theme.shape.borderRadius * 2,
  '& .MuiChip-label': {
    padding: '8px 12px',
    fontSize: '0.9rem',
  },
  '& .MuiChip-icon': {
    fontSize: '1.2rem',
  },
}));

const ComponentItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.05),
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
}));

const ConfigurationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  
  const config = configurations.find(c => c.id === id);

  if (!config) {
    return (
      <Container maxWidth="xl" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Configuration non trouvée
        </Typography>
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/configurateur')}
          sx={{ mt: 2 }}
        >
          Retour aux configurations
        </Button>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
          : 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/configurateur')}
          sx={{ 
            mb: 4,
            borderRadius: '20px',
            padding: '10px 20px',
            '&:hover': {
              transform: 'translateX(-5px)',
            },
          }}
        >
          Retour aux configurations
        </Button>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <DetailPaper>
              <ImageContainer>
                <img src={config.image} alt={config.nom} />
              </ImageContainer>
              
              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="h3" 
                  component="h1" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 800,
                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                  }}
                >
                  {config.nom}
                </Typography>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 'bold',
                    color: theme.palette.primary.main,
                    mb: 2,
                  }}
                >
                  {config.prix.toFixed(2)}€
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <FeatureChip
                    icon={<VerifiedIcon />}
                    label="Garantie 2 ans"
                    color="primary"
                  />
                  <FeatureChip
                    icon={<LocalShippingIcon />}
                    label="Livraison gratuite"
                    color="primary"
                    variant="outlined"
                  />
                </Box>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                  }}
                >
                  {config.description}
                </Typography>
              </Box>

              <Divider sx={{ my: 4 }} />

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <ActionButton
                    variant="contained"
                    fullWidth
                    href={config.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<ShoppingCartIcon />}
                  >
                    Commander maintenant
                  </ActionButton>
                </Grid>
              </Grid>
            </DetailPaper>
          </Grid>

          <Grid item xs={12} md={4}>
            <DetailPaper>
              <Typography 
                variant="h5" 
                gutterBottom 
                sx={{ 
                  fontWeight: 'bold',
                  mb: 3,
                  color: theme.palette.primary.main,
                }}
              >
                Caractéristiques
              </Typography>
              <List>
                {Object.entries(config.components || {}).map(([key, value], index) => (
                  <ComponentItem key={key} divider={index !== Object.entries(config.components || {}).length - 1}>
                    <ListItemText
                      primary={key}
                      secondary={value}
                      primaryTypographyProps={{
                        fontWeight: 'bold',
                        color: theme.palette.primary.main,
                        gutterBottom: true,
                      }}
                      secondaryTypographyProps={{
                        sx: { fontSize: '1rem' }
                      }}
                    />
                  </ComponentItem>
                ))}
              </List>
            </DetailPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ConfigurationDetail;
