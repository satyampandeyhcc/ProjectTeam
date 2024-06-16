const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const Contact = require("../models/contactModel");
const Booking = require("../models/bookingModel");
const bcrypt = require("bcryptjs");
const { sendEmail } = require("../Middleware/sendEmail");
const getOTPByEmail = require("../Controllers/OtpFetch.js");
const { welcomeSendEmail } = require("../Middleware/welcome.js");

const nodemailer = require("nodemailer");

const { promisify } = require("util");

// Setup nodemailer transporter
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "satyampandey14999@gmail.com",
    pass: "xtwa vbsj qjiy syrb", // Use App Password or your actual password
  },
});

// Promisify the sendMail function
const sendMailAsync = promisify(transporter.sendMail).bind(transporter);

router.post("/sendverifyemail", async (req, res) => {
  const { id, status, email } = req.body;
  console.log(email);
  try {
    if (status) {
      // Send verification email if user is verified
      var mailOptions = {
        from: "satyampandey14999@gmail.com",
        to: email,
        subject: "Account Verification",
        text: "Welcome to Bike Riding Venture. Your account has been successfully verified. You can now access all features.",
      };
      await sendMailAsync(mailOptions);
    } else {
      console.log("Account is not Verified");
    }
    res.status(200).json({ message: "updated" });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

router.post("/register", async (req, res) => {
  const { username, password, cpassword, mobileNumber, profileName } = req.body;

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      console.log("Username is already taken");
      return res.status(409).json({ error: "Username is already taken." });
    }

    // Hash the password and confirm password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds
    const hashedConfirmPassword = await bcrypt.hash(cpassword, 10); // 10 is the saltRounds

    const newUser = new User({
      username,
      password: hashedPassword,
      cpassword: hashedConfirmPassword,
      mobileNumber,
      profileName,
    });

    await newUser.save();

    return res.status(201).json({ message: "Registration successful." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong." });
  }
});

router.post("/login", async (req, res) => {
  const { username, password, type } = req.body;
  console.log(req.body);

  try {
    const user = await User.findOne({ username });

    if (user) {
      // Compare hashed password
      if (type) {
        res.send(user);
        return;
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        res.send(user);
      } else {
        return res.status(401).json({ error: "Invalid username or password" });
      }
    } else if (type) {
      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds

      const newUser = new User({ ...req.body, password: hashedPassword });
      console.log(newUser);
      await newUser.save();

      res.send(newUser);
    } else {
      return res.status(401).json({ error: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/updateverify", async (req, res) => {
  const { id, status } = await req.body;

  try {
    const user = await User.findByIdAndUpdate(id, { verified: status });
    res.status(200).json({ message: "updated" });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

router.post("/updateprofile", async (req, res) => {
  const { imagearr, id, phone } = await req.body;
  console.log(req.body);
  console.log("15");
  try {
    const user = await User.findByIdAndUpdate(id, {
      imagearr: imagearr,
      mobileNumber: phone,
      verified: false,
    });

    user.updatedAt = new Date();
    await user.save();
    res.status(200).json({ message: "updated" });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

router.get("/getallimages", async (req, res) => {
  // console.log(req.query.id);
  try {
    const id = await req.query.id;
    const images = await User.findById(id);
    console.log(images);

    res.send(images.imagearr);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.get("/getstatus", async (req, res) => {
  try {
    const id = await req.query.id;
    const user = await User.findById(id);

    res.send(user.verified);
  } catch (error) {
    return res.status(400).json(error);
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

router.post("/contact", async (req, res) => {
  try {
    // Extracting form data from request body
    const { name, contact, subject, feedback } = req.body;

    const newContact = new Contact({
      name,
      contact,
      subject,
      feedback,
    });

    await newContact.save();

    res.status(200).json({ message: "Contact form submitted successfully!" });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/getAllcontact", async (req, res) => {
  try {
    // Fetch all contact responses from the database
    const contacts = await Contact.find();

    res.status(200).json(contacts);
  } catch (error) {
    console.error("Error fetching contact responses:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/allusers", async (req, res) => {
  try {
    const users = await User.find().sort({ updatedAt: -1 });

    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/allbookingusers", async (req, res) => {
  try {
    const booking = await Booking.find();

    res.status(200).json(booking);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/passChange", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    res.status(202).json({ message: "Password updated successfully!" });
  } catch (error) {
    console.error("Update failed:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/sendEmail", sendEmail);

router.post("/welcomeSendEmail", welcomeSendEmail);

router.post("/verifyOTP", getOTPByEmail);
module.exports = router;

module.exports = router;
