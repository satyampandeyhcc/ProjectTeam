// otpService.js
const OTP = require("../models/otpModel");

async function getOTPByEmail(req, res) {
  try {
    const email = req.body.email;

    console.log('Email:', email);
    
    // Find the latest OTP record for the given email
    const otpRecord = await OTP.findOne({ email }).sort({ createdAt: -1 });

    if (!otpRecord) {
      return res.status(404).json({ error: "OTP record not found" });
    }

    const response = {
      email,
      otp: otpRecord.otp
    };

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching OTP:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = getOTPByEmail;
