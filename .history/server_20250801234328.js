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
mongoose.connect('mongodb://localhost:27017/contactDB',{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Error:", err));

// Mongoose Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  date: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model("Contact", contactSchema);

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: "API working" });
});

// Contact route
app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Message received" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
