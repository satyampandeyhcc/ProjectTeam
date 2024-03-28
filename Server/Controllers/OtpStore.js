const OTP = require('../models/otpModel');

const storeOTP = async (email, otp) => {
  try {
    if (!email || !otp) {
      throw new Error('Email and OTP are required in the request body');
    }
    
    // Create a new OTP document
    const newOTP = new OTP({ email, otp });
    
    // Save the OTP document to the database
    await newOTP.save();
    
    console.log('OTP stored successfully');
  } catch (error) {
    console.error("Error storing OTP:", error);
  }
}

module.exports = storeOTP;