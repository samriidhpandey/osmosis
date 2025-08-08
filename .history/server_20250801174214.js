// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/contactDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Route to handle form submission
app.post('/api/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: 'Contact submitted successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error saving contact' });
  }
});

// Default route
app.get('/', (req, res) => {
  res.send('Backend is running...');
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
