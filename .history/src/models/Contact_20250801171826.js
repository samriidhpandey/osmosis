const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST route to save contact form data
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    const newContact = new Contact({ name, email, phone, subject, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact saved successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
