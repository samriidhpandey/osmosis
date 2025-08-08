const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Contact = require('./models/Contact');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ MongoDB connection
mongoose.connect('mongodb://localhost:27017/websiteDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// ✅ Routes

// Home Test
app.get('/', (req, res) => {
  res.send("Backend is running...");
});

// GET all contacts
app.get('/api/contact', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST new contact
app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Contact saved" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save contact" });
  }
});

// PUT update contact by ID
app.put('/api/contact/:id', async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update contact" });
  }
});

// DELETE single contact by ID
app.delete('/api/contact/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete contact" });
  }
});

// DELETE all contacts
app.delete('/api/contact', async (req, res) => {
  try {
    await Contact.deleteMany({});
    res.json({ message: "All contacts deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete all contacts" });
  }
});

// DELETE contacts by month (e.g., 2025-08)
app.delete('/api/contact/month/:month', async (req, res) => {
  try {
    const { month } = req.params; // example: "2025-08"
    const result = await Contact.deleteMany({ createdAt: { $regex: `^${month}` } });
    res.json({ message: `${result.deletedCount} contacts deleted for month ${month}` });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete by month" });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
