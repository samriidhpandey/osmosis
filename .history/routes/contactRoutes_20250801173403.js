const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Saved!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Contact.find().sort({ date: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
np