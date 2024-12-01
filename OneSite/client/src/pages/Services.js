import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';

const MotionGrid = motion(Grid);

const Services = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <Typography
            component="h1"
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Nos Services
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto', mb: 2 }}
          >
            Des solutions informatiques complètes et professionnelles pour répondre à tous vos besoins
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <MotionGrid
              item
              xs={12}
              sm={6}
              md={4}
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </MotionGrid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
