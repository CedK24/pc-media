import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const appointmentService = {
  createAppointment: async (appointmentData) => {
    try {
      const response = await api.post('/appointments', appointmentData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getAppointments: async () => {
    try {
      const response = await api.get('/appointments');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  updateAppointmentStatus: async (id, status) => {
    try {
      const response = await api.patch(`/appointments/${id}/status`, { status });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export const emergencyService = {
  createEmergency: async (emergencyData) => {
    try {
      const response = await api.post('/emergencies', emergencyData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getEmergencies: async () => {
    try {
      const response = await api.get('/emergencies');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  updateEmergencyStatus: async (id, status) => {
    try {
      const response = await api.patch(`/emergencies/${id}/status`, { status });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};
