const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// ✅ Allow CORS from frontend (localhost:5173)
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/websiteDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB error:", err));

// Schema & Model
const Contact = require("./models/Contact");

// POST route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const newContact = new Contact({ name, email, phone, subject, message });
    await newContact.save();

    res.status(200).json({ message: "Contact saved successfully" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
