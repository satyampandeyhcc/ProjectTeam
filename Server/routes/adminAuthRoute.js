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
   
        return res.status(200).json({ message: "Admin authenticated" });
      } else {
      
        return res.status(401).json({ error: "Invalid email or password" });
      }
    } else {
     
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
    
      return res.status(400).json({ error: "Admin with this email already exists" });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin instance
    const newAdmin = new Admin({
      email,
      password: hashedPassword 
    });

    await newAdmin.save();

   
    res.status(201).json({ message: "Admin created successfully" });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});




module.exports = router;
