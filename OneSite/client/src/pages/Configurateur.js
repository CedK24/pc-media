import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  useTheme,
  alpha,
  Chip,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { configurations } from '../data/configurations';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';

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

const ConfigCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  background: theme.palette.mode === 'dark' 
    ? alpha(theme.palette.background.paper, 0.8)
    : theme.palette.background.paper,
  backdropFilter: 'blur(10px)',
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-12px) scale(1.02)',
    boxShadow: '0 12px 48px 0 rgba(31, 38, 135, 0.25)',
    '& .MuiCardMedia-root': {
      transform: 'scale(1.1)',
    },
    '& .config-title': {
      color: theme.palette.primary.main,
    },
  },
  animation: `${fadeIn} 0.6s ease-out forwards`,
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 300,
  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '300px',
    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
    zIndex: 1,
  },
}));

const PriceTag = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  right: 16,
  background: alpha(theme.palette.primary.main, 0.9),
  color: theme.palette.primary.contrastText,
  padding: '8px 16px',
  borderRadius: theme.shape.borderRadius * 3,
  fontWeight: 'bold',
  backdropFilter: 'blur(4px)',
  zIndex: 2,
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  fontSize: '1.1rem',
}));

const FeatureChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  height: 'auto',
  borderRadius: theme.shape.borderRadius * 2,
  '& .MuiChip-label': {
    padding: '6px 10px',
    fontSize: '0.85rem',
  },
  '& .MuiChip-icon': {
    fontSize: '1.1rem',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 3,
  padding: '12px 24px',
  fontWeight: 'bold',
  textTransform: 'none',
  fontSize: '1rem',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  '&:hover': {
    transform: 'translateX(6px)',
    boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
    '& .MuiSvgIcon-root': {
      transform: 'translateX(4px)',
    },
  },
  '& .MuiSvgIcon-root': {
    transition: 'transform 0.3s ease',
    marginLeft: theme.spacing(1),
  },
}));

const Configurateur = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleConfigClick = (configId) => {
    navigate(`/configuration/${configId}`);
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
          : 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
        pt: 8,
        pb: 12,
      }}
    >
      <Container maxWidth="xl">
        <Box 
          sx={{ 
            textAlign: 'center',
            mb: 10,
            animation: `${fadeIn} 0.8s ease-out forwards`,
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              fontWeight: 800,
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              mb: 3,
            }}
          >
            Nos Configurations PC
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
            }}
          >
            Des configurations sur mesure optimisées pour une expérience gaming exceptionnelle
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={4} 
          sx={{ 
            px: { xs: 2, md: 4 },
          }}
        >
          {configurations.map((config, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={3} 
              key={config.id}
              sx={{ 
                animation: `${fadeIn} 0.6s ease-out forwards`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <ConfigCard onClick={() => handleConfigClick(config.id)}>
                <Box sx={{ position: 'relative' }}>
                  <PriceTag>
                    {config.prix.toFixed(2)}€
                  </PriceTag>
                  <StyledCardMedia
                    component="img"
                    image={config.image}
                    alt={config.nom}
                    sx={{
                      height: 300,
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography 
                    variant="h5" 
                    component="h2"
                    className="config-title"
                    sx={{ 
                      fontWeight: 700,
                      fontSize: '1.5rem',
                      mb: 2,
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {config.nom}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <FeatureChip
                      icon={<VerifiedIcon />}
                      label="Garantie 2 ans"
                      color="primary"
                      size="small"
                    />
                    <FeatureChip
                      icon={<LocalShippingIcon />}
                      label="Livraison gratuite"
                      variant="outlined"
                      size="small"
                    />
                  </Box>
                  <Typography 
                    variant="body1" 
                    color="text.secondary"
                    sx={{ 
                      mb: 3,
                      lineHeight: 1.6,
                      display: '-webkit-box',
                      overflow: 'hidden',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 3,
                    }}
                  >
                    {config.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <StyledButton
                    variant="contained"
                    fullWidth
                    endIcon={<ArrowForwardIcon />}
                  >
                    Voir les détails
                  </StyledButton>
                </CardActions>
              </ConfigCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Configurateur;
