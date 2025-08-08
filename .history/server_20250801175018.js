const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// Models and routes
const Contact = require('./models/Contact');

const app = express();
const PORT = 5000;

// ✅ Use CORS
app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// POST Route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    const contact = new Contact({ name, email, phone, subject, message });
    await contact.save();
    res.status(201).json({ success: true, message: 'Contact saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error saving contact' });
  }
});

// MongoDB Connect
mongoose.connect('mongodb://localhost:27017/contactform', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB Connected");
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.log("MongoDB connection error:", err);
});
