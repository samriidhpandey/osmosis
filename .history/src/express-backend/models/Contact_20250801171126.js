const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// models/Contact.js
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Contact", contactSchema);
