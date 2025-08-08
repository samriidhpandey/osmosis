const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Contact = require('./models/Contact');

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

// Home test route
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

// ✅ POST new contact
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

// ✅ PUT update contact (by ID)
app.put('/api/contact/:id', async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: 'Contact updated', updated });
  } catch (error) {
    console.error('PUT /api/contact/:id Error:', error);
    res.status(500).json({ error: 'Failed to update contact' });
  }
});

// ✅ DELETE one contact by ID
app.delete('/api/contact/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Contact deleted' });
  } catch (error) {
    console.error('DELETE /api/contact/:id Error:', error);
    res.status(500).json({ error: 'Failed to delete contact' });
  }
});

// ✅ DELETE all contacts
app.delete('/api/contact', async (req, res) => {
  try {
    await Contact.deleteMany({});
    res.status(200).json({ message: 'All contacts deleted' });
  } catch (error) {
    console.error('DELETE /api/contact Error:', error);
    res.status(500).json({ error: 'Failed to delete all contacts' });
  }
});

// ✅ DELETE contacts of a specific month
app.delete('/api/contact/month/:month', async (req, res) => {
  try {
    const month = req.params.month;
    const regex = new RegExp(`^${month}`, 'i'); // Match YYYY-MM
    const result = await Contact.deleteMany({ createdAt: { $regex: regex } });
    res.status(200).json({ message: `${result.deletedCount} contacts deleted for month ${month}` });
  } catch (error) {
    console.error('DELETE /api/contact/month/:month Error:', error);
    res.status(500).json({ error: 'Failed to delete by month' });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
