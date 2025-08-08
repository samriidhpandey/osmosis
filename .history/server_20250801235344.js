const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Contact = require('./models/Contact'); // <-- Make sure this is correct

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/websiteDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB Connected");
}).catch((err) => {
  console.log("MongoDB connection error:", err);
});

// ✅ Home test route
app.get('/', (req, res) => {
  res.send('Backend is running...');
});

// ✅ GET all contacts
app.get('/api/contact', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error('GET /api/contact Error:', error);
    res.status(500).json({ error: 'Server Error' });
  }
});

// ✅ POST contact
app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact saved' });
  } catch (error) {
    console.error('POST /api/contact Error:', error);
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

// Server start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
