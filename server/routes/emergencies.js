const express = require('express');
const router = express.Router();
const Emergency = require('../models/Emergency');
const twilioService = require('../services/twilioService');

// Get all emergency requests
router.get('/', async (req, res) => {
  try {
    const emergencies = await Emergency.find().sort({ createdAt: -1 });
    res.json(emergencies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new emergency request
router.post('/', async (req, res) => {
  const emergency = new Emergency({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    emergencyType: req.body.emergencyType,
    description: req.body.description,
    address: req.body.address,
  });

  try {
    const newEmergency = await emergency.save();
    
    // Notify technician
    await twilioService.notifyTechnicianForEmergency(newEmergency);

    res.status(201).json(newEmergency);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update emergency status
router.patch('/:id/status', async (req, res) => {
  try {
    const emergency = await Emergency.findById(req.params.id);
    if (!emergency) {
      return res.status(404).json({ message: 'Emergency request not found' });
    }
    
    emergency.status = req.body.status;
    const updatedEmergency = await emergency.save();
    res.json(updatedEmergency);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
