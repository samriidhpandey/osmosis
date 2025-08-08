const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  createdAt: {
    type: String,
    default: () => new Date().toISOString().slice(0, 10)  // e.g., "2025-08-01"
  }
});

module.exports = mongoose.model('Contact', contactSchema);
