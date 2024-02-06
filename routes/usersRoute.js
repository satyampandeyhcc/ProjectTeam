const express = require("express");
const router = express.Router();
const User = require("../models/userModel")
const Contact = require("../models/contactModel");


router.post("/login", async(req, res) => {

      const {username , password} = req.body
// console.log(req.body);

    try {
        const user = await User.findOne({ username });
        // console.log(user);
        if (user && user.password === password) {
            // Passwords match, return user
            res.send(user);
        } else {
            // Invalid username or password
            return res.status(401).json({ error: 'Invalid username or password' });
        }
    } catch (error) {
        console.error("Error occurred:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
  
});

router.post("/register", async(req, res) => {

  const { username, password ,cpassword,mobileNumber} = req.body;
  
  console.log(req.body);
    try {
      const existingUser = await User.findOne({ username });
  
      if (existingUser) {
        console.log("Username is already taken");
        return res.status(409).json({ error: "Username is already taken." });
      }
  
      const newUser = new User({ username, password ,cpassword ,mobileNumber});
  
      await newUser.save();
  
      return res.status(201).json({ message: "Registration successful." });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Something went wrong." });
    }
  });


  router.post("/checkUsername", async (req, res) => {
    const { username } = req.body;
  
    try {
      const existingUser = await User.findOne({ username });
  
      if (existingUser) {
        return res.json({ exists: true });
      }
  
      return res.json({ exists: false });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Something went wrong." });
    }
  });


  
// POST request to handle form submission
router.post("/contact", async (req, res) => {
  try {
    // Extracting form data from request body
    const { name, contact, subject, feedback } = req.body;

    // Create a new contact document
    const newContact = new Contact({
      name,
      contact,
      subject,
      feedback
    });

    // Save the contact to the database
    await newContact.save();

    // Respond with success message
    res.status(200).json({ message: "Contact form submitted successfully!" });
  } catch (error) {
    // Handle errors
    console.error("Error submitting contact form:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router

