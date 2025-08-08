const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Mongoose Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  date: {
    type: Date,
    default: Date.now,
  }
});

const Contact = mongoose.model('Contact', contactSchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/contactFormDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB error:', err);
});

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(200).json({ message: 'Contact saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
