// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());


// MongoDB connection
mongoose.connect('mongodb://localhost:27017/contactFormDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api/contact', contactRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
