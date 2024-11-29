import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Box,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import { emergencyService } from '../services/api';

const emergencyTypes = [
  { value: 'system-crash', label: 'Crash système' },
  { value: 'data-loss', label: 'Perte de données' },
  { value: 'network-down', label: 'Panne réseau' },
  { value: 'malware', label: 'Virus/Malware' },
  { value: 'hardware-failure', label: 'Panne matérielle' },
];

const Emergency = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    emergencyType: '',
    description: '',
    address: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await emergencyService.createEmergency(formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        emergencyType: '',
        description: '',
        address: '',
      });
    } catch (error) {
      setError(error.message || 'Une erreur est survenue lors de l\'envoi de la demande d\'urgence');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <WarningIcon color="error" sx={{ fontSize: 60 }} />
        <Typography variant="h4" component="h1" gutterBottom>
          Intervention Urgente
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Support technique disponible 6j/7. Nous intervenons dans les plus brefs délais.
        </Typography>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 4 }}>
          {error}
        </Alert>
      )}

      {submitted ? (
        <Alert severity="success" sx={{ mb: 4 }}>
          Votre demande d'intervention urgente a été enregistrée. Un technicien vous contactera dans les plus brefs délais.
        </Alert>
      ) : (
        <Paper sx={{ p: 3 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Nom complet"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Téléphone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Adresse d'intervention"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  multiline
                  rows={2}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Type d'urgence</InputLabel>
                  <Select
                    name="emergencyType"
                    value={formData.emergencyType}
                    onChange={handleInputChange}
                    label="Type d'urgence"
                  >
                    {emergencyTypes.map((type) => (
                      <MenuItem key={type.value} value={type.value}>
                        {type.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
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
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="error"
                  fullWidth
                  size="large"
                  startIcon={<WarningIcon />}
                  disabled={loading}
                >
                  {loading ? 'En cours...' : 'Demander une intervention urgente'}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      )}

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body1" color="text.secondary">
          Notre support technique est disponible 6j/7
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
          Du Lundi au Vendredi : 9h - 18h<br />
          Samedi : 10h - 16h
        </Typography>
      </Box>
    </Container>
  );
};

export default Emergency;
