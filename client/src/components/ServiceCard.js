import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StyledCard = styled(Card)(({ theme, highlight }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: highlight ? theme.palette.primary.main : theme.palette.background.paper,
  color: highlight ? theme.palette.primary.contrastText : theme.palette.text.primary,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    background: highlight 
      ? `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`
      : 'transparent',
    zIndex: 0,
  },
  '& .MuiCardContent-root': {
    position: 'relative',
    zIndex: 1,
  },
  '& .MuiCardActions-root': {
    position: 'relative',
    zIndex: 1,
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(8px)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1) rotate(5deg)',
  },
}));

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <StyledCard highlight={service.highlight}>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4 }}>
        <IconWrapper>
          <Icon sx={{ fontSize: 40 }} />
        </IconWrapper>
        <Typography 
          variant="h5" 
          component="h3" 
          align="center" 
          gutterBottom
          sx={{ 
            fontWeight: 600,
            color: service.highlight ? 'inherit' : 'text.primary',
          }}
        >
          {service.title}
        </Typography>
        <Typography 
          align="center" 
          sx={{ 
            mb: 2,
            color: service.highlight ? 'rgba(255,255,255,0.9)' : 'text.secondary',
          }}
        >
          {service.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', pb: 4, gap: 1 }}>
        <Button
          variant={service.highlight ? "outlined" : "contained"}
          component={Link}
          to={`/service/${service.id}`}
          sx={{
            borderColor: service.highlight ? 'rgba(255,255,255,0.5)' : undefined,
            color: service.highlight ? 'white' : undefined,
            '&:hover': {
              borderColor: service.highlight ? 'white' : undefined,
            },
          }}
        >
          En savoir plus
        </Button>
        <IconButton
          component={Link}
          to="/rendez-vous"
          sx={{
            bgcolor: service.highlight ? 'rgba(255,255,255,0.1)' : 'primary.light',
            color: service.highlight ? 'white' : 'primary.main',
            '&:hover': {
              bgcolor: service.highlight ? 'rgba(255,255,255,0.2)' : 'primary.light',
              transform: 'translateX(4px)',
            },
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </CardActions>
    </StyledCard>
  );
};

export default ServiceCard;
