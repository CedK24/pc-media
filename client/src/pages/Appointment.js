import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { fr } from 'date-fns/locale';
import { format } from 'date-fns';

const serviceTypes = [
  { value: 'repair', label: 'Réparation' },
  { value: 'maintenance', label: 'Maintenance' },
  { value: 'installation', label: 'Installation' },
  { value: 'consultation', label: 'Consultation' },
];

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    description: '',
  });
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate) {
      setSubmitStatus({
        type: 'error',
        message: 'Veuillez sélectionner une date pour le rendez-vous'
      });
      return;
    }

    try {
      // Simulation d'envoi de données (à remplacer par l'appel API réel)
      console.log('Données du rendez-vous:', {
        ...formData,
        date: selectedDate,
      });
      
      setSubmitStatus({
        type: 'success',
        message: 'Rendez-vous pris avec succès !'
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        description: '',
      });
      setSelectedDate(null);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Erreur lors de la prise de rendez-vous. Veuillez réessayer.'
      });
    }
  };

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
        Prendre Rendez-vous
      </Typography>

      {submitStatus.message && (
        <Alert 
          severity={submitStatus.type} 
          sx={{ mb: 4 }}
          onClose={() => setSubmitStatus({ type: '', message: '' })}
        >
          {submitStatus.message}
        </Alert>
      )}

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper
            component="form"
            onSubmit={handleSubmit}
            elevation={3}
            sx={{
              p: 4,
              backgroundColor: 'background.paper',
              borderRadius: 2,
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
              Informations de contact
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Nom complet"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Téléphone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Type de service</InputLabel>
                  <Select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    label="Type de service"
                  >
                    {serviceTypes.map((type) => (
                      <MenuItem key={type.value} value={type.value}>
                        {type.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>
                  <DateTimePicker
                    label="Date et heure du rendez-vous"
                    value={selectedDate}
                    onChange={handleDateChange}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        required: true,
                      },
                    }}
                    minTime={new Date().setHours(8, 0)}
                    maxTime={new Date().setHours(18, 0)}
                    minutesStep={30}
                    format="dd/MM/yyyy HH:mm"
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description du problème"
                  name="description"
                  multiline
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Date sélectionnée : {selectedDate ? format(selectedDate, 'PPP à HH:mm', { locale: fr }) : 'Aucune date sélectionnée'}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    mt: 2,
                    height: 48,
                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                  }}
                >
                  Confirmer le rendez-vous
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Appointment;
