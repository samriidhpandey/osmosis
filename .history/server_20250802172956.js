const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Contact = require('./models/Contact');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connect
mongoose.connect('mongodb://localhost:27017/websiteDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// ✅ GET all contacts
app.get('/api/contact', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ✅ POST new contact
app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact saved' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

// ✅ PUT (update/edit) contact
app.put('/api/contact/:id', async (req, res) => {
  try {
    await Contact.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Contact updated' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update' });
  }
});

// ✅ DELETE contact by ID
app.delete('/api/contact/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete' });
  }
});

// ✅ DELETE all contacts
app.delete('/api/contact', async (req, res) => {
  try {
    await Contact.deleteMany({});
    res.json({ message: 'All contacts deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete all' });
  }
});

// ✅ DELETE contacts by month (e.g., /api/contact/month/2025-08)
app.delete('/api/contact/month/:month', async (req, res) => {
  try {
    const monthPrefix = req.params.month;
    await Contact.deleteMany({ createdAt: { $regex: `^${monthPrefix}` } });
    res.json({ message: `Contacts for ${monthPrefix} deleted` });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete by month' });
  }
});

app.get('/', (req, res) => {
  res.send("Backend is running...");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
