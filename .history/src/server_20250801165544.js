const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(session({
  secret: "secret123",
  resave: false,
  saveUninitialized: true
}));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
.catch(err => console.log("Mongo Error: ", err));

// Auth middleware
const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === adminEmail && password === adminPassword) {
    req.session.loggedIn = true;
    return res.json({ message: "Login successful" });
  }
  res.status(401).json({ message: "Unauthorized" });
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.json({ message: "Logged out" });
});

app.use("/api/contact", require("./routes/contactRoutes"));

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
