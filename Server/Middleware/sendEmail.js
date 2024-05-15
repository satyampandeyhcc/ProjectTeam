const expressAsyncHandler = require("express-async-handler");
// const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const generateOTP = require("./generateOtp");
const storeOTP = require("../Controllers/OtpStore");
const { promisify } = require("util");
const User = require("../models/userModel")
// dotenv.config();

let transporter = nodemailer.createTransport({
  service:"gmail",
  auth: {
    user: "satyampandey14999@gmail.com",
    pass: "xtwa vbsj qjiy syrb", // Use App Password or your actual password
  },
});

// Promisify the sendMail function
const sendMailAsync = promisify(transporter.sendMail).bind(transporter);

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { email } = req.body;
  const otp = generateOTP();
  const user = await User.findOne({ username:email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
  var mailOptions = {
    from: "satyampandey14999@gmail.com",
    to: email,
    subject: "OTP from Bike Riding Venture",
    text: `Welcome to Bike Riding Venture. Your OTP is: ${otp}`,
  };
  console.log(mailOptions);
  try {
    await sendMailAsync(mailOptions);
    storeOTP(email, otp);
    console.log("Email sent successfully!");
    return res.status(200).json({ otp: "Success" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error sending email" });
  }
});

module.exports = { sendEmail };
