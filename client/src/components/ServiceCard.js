import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const StyledCard = styled(Card)(({ theme, highlight }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.mode === 'dark' 
    ? highlight ? 'rgba(244, 63, 94, 0.1)' : 'rgba(24, 24, 27, 0.8)'
    : highlight ? 'rgba(37, 99, 235, 0.1)' : 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.mode === 'dark'
    ? highlight ? 'rgba(244, 63, 94, 0.2)' : 'rgba(255, 255, 255, 0.1)'
    : highlight ? 'rgba(37, 99, 235, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 12px 32px rgba(244, 63, 94, 0.2)'
      : '0 12px 32px rgba(37, 99, 235, 0.2)',
    border: `1px solid ${theme.palette.mode === 'dark'
      ? highlight ? 'rgba(244, 63, 94, 0.4)' : 'rgba(255, 255, 255, 0.2)'
      : highlight ? 'rgba(37, 99, 235, 0.4)' : 'rgba(0, 0, 0, 0.2)'}`,
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(37, 99, 235, 0.05)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1) rotate(5deg)',
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(37, 99, 235, 0.1)',
  }
}));

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <StyledCard highlight={service.highlight}>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <IconWrapper>
            <Icon sx={{ 
              fontSize: 40,
              color: theme => theme.palette.mode === 'dark'
                ? theme.palette.primary.main
                : theme.palette.primary.dark
            }} />
          </IconWrapper>
        </Box>
        <Typography 
          variant="h5" 
          component="h3" 
          gutterBottom
          sx={{ 
            fontWeight: 600,
            color: theme => theme.palette.mode === 'dark'
              ? theme.palette.primary.light
              : theme.palette.primary.dark
          }}
        >
          {service.title}
        </Typography>
        <Typography 
          variant="body1"
          color="text.secondary" 
          paragraph
          sx={{ mb: 2 }}
        >
          {service.description}
        </Typography>
        <List sx={{ mt: 'auto', mb: 2 }}>
          {service.features.slice(0, 3).map((feature, index) => (
            <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <CheckCircleIcon sx={{ 
                  fontSize: 20,
                  color: theme => theme.palette.mode === 'dark'
                    ? theme.palette.primary.main
                    : theme.palette.primary.dark
                }} />
              </ListItemIcon>
              <ListItemText 
                primary={feature} 
                primaryTypographyProps={{
                  variant: 'body2',
                  color: 'text.secondary'
                }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions sx={{ p: 3, pt: 0 }}>
        <Button
          component={Link}
          to={`/services/${service.id}`}
          variant="contained"
          fullWidth
          endIcon={<ArrowForwardIcon />}
          sx={{
            background: theme => theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)'
              : 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
            '&:hover': {
              background: theme => theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)'
                : 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
            }
          }}
        >
          En savoir plus
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default ServiceCard;
