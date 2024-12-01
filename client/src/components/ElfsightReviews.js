import React, { useEffect } from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const ElfsightReviews = () => {
  const theme = useTheme();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box 
      sx={{ 
        py: 8,
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, rgba(24, 24, 27, 0.8) 0%, rgba(9, 9, 11, 0.9) 100%)'
          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(241, 245, 249, 0.9) 100%)',
        backdropFilter: 'blur(10px)',
        borderTop: `1px solid ${theme.palette.mode === 'dark'
          ? 'rgba(244, 63, 94, 0.2)'
          : 'rgba(37, 99, 235, 0.2)'}`,
        borderBottom: `1px solid ${theme.palette.mode === 'dark'
          ? 'rgba(244, 63, 94, 0.2)'
          : 'rgba(37, 99, 235, 0.2)'}`,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              gap: 1,
              mb: 2
            }}
          >
            <StarIcon 
              sx={{ 
                color: theme.palette.mode === 'dark'
                  ? theme.palette.primary.main
                  : theme.palette.primary.dark,
                fontSize: '2rem'
              }} 
            />
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                background: theme.palette.mode === 'dark'
                  ? `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`
                  : `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.secondary.dark} 90%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: theme.palette.mode === 'dark' ? '0 0 30px rgba(244, 63, 94, 0.3)' : 'none',
              }}
            >
              Avis de nos clients
            </Typography>
            <StarIcon 
              sx={{ 
                color: theme.palette.mode === 'dark'
                  ? theme.palette.primary.main
                  : theme.palette.primary.dark,
                fontSize: '2rem'
              }} 
            />
          </Box>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto',
              mb: 4,
              fontSize: '1.1rem',
              lineHeight: 1.6
            }}
          >
            Découvrez ce que nos clients pensent de nos services. Votre satisfaction est notre priorité.
          </Typography>
        </Box>
        
        <Box 
          sx={{
            '& .elfsight-app-d9aff7d4-cf49-43e0-bed5-6c3897cd550f': {
              maxWidth: '1200px',
              margin: '0 auto',
              background: theme.palette.mode === 'dark'
                ? 'rgba(24, 24, 27, 0.6)'
                : 'rgba(255, 255, 255, 0.8)',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: theme.palette.mode === 'dark'
                ? '0 8px 32px rgba(0, 0, 0, 0.4)'
                : '0 8px 32px rgba(0, 0, 0, 0.1)',
              border: `1px solid ${theme.palette.mode === 'dark'
                ? 'rgba(244, 63, 94, 0.2)'
                : 'rgba(37, 99, 235, 0.2)'}`,
              backdropFilter: 'blur(16px)',
            }
          }}
        >
          <div 
            className="elfsight-app-d9aff7d4-cf49-43e0-bed5-6c3897cd550f" 
            data-elfsight-app-lazy
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ElfsightReviews;
