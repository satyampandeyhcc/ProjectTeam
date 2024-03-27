const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs'); // For password hashing
const Admin = require("../models/adminModel");


router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (admin) {
      // Compare hashed password stored in the database with the provided password
      const passwordMatch = await bcrypt.compare(password, admin.password);
      
      if (passwordMatch) {
        // Admin authenticated
        return res.status(200).json({ message: "Admin authenticated" });
      } else {
        // Invalid password
        return res.status(401).json({ error: "Invalid email or password" });
      }
    } else {
      // Admin not found
      return res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if admin with the given email already exists
    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      // If admin already exists, return error
      return res.status(400).json({ error: "Admin with this email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin instance
    const newAdmin = new Admin({
      email,
      password: hashedPassword // Store hashed password in the database
    });

    // Save the new admin to the database
    await newAdmin.save();

    // Send success response
    res.status(201).json({ message: "Admin created successfully" });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});




module.exports = router;
