const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const twilioService = require('../services/twilioService');

// Get all appointments
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ appointmentDate: 1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new appointment
router.post('/', async (req, res) => {
  const appointment = new Appointment({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    serviceType: req.body.serviceType,
    description: req.body.description,
    appointmentDate: new Date(req.body.appointmentDate),
  });

  try {
    const newAppointment = await appointment.save();
    
    // Send confirmation SMS to client
    await twilioService.notifyClientAppointmentConfirmation(newAppointment);

    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update appointment status
router.patch('/:id/status', async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    
    appointment.status = req.body.status;
    const updatedAppointment = await appointment.save();
    res.json(updatedAppointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete appointment
router.delete('/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    
    await appointment.remove();
    res.json({ message: 'Appointment deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
