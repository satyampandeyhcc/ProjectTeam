const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
const Bike = require("../models/bikeModel");
const { v4: uuidv4 } = require("uuid");



const stripe = require("stripe")(
  // "sk_test_51PEY8qSBvNz3idXhRKMgxpuF5JiSwksUXgLYnG4AspoFwdmLICMiZz3v0CUTOIEaGRLvmV8oHMFRx5zqRDKTKXxp00pVYkWGEz"


  "sk_test_51OvXtUSED8rhSVdkq8XqlCu0n8y26ndxRsXl2vt0NrmVUatVm8SGqEiDEjuhUDSni7M0jaFcYofc8nUj29tckUna00R68h1MuP"
);

// const { v4: uuidv4 } = require('uuid');






router.post("/bookbike", async (req, res) => {
  const { token } = req.body;
  console.log(req.body);
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
// const paymentMethodID="biked_1OvblMSED8rhSVdk13YZ21Nx"
    const payment = await stripe.paymentIntents.create(
      {
        amount: req.body.totalAmount * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
        // payment_method_types: ["biked"],
        // payment_method:paymentMethodID,
        payment_method: 'pm_card_visa',
        payment_method_types: [
          "card",
        ],
        description:"Payment for your order",

        
      
      },
      {
        idempotencyKey: uuidv4(),
        confirm: true,
      }
    );

    if (payment) {
      req.body.transactionId = payment.id;
      const newbooking = new Booking(req.body);
      // console.log(req.body);
      await newbooking.save();
      const bike = await Bike.findOne({ _id: req.body.bike });
      console.log(req.body.bike);
      bike.bookedTimeSlots.push(req.body.bookedTimeSlots);
      // if(bike.capacity!=0)
      bike.capacity -= 1;
// console.log(111111111);
      await bike.save();
      res.send("Your booking is successful");
    } else {
      return res.status(400).json(error);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

router.get("/getallbookings", async(req, res) => {

    try {

        const bookings = await Booking.find().populate('bike').populate('user').sort({ createdAt: -1 })
        // console.log(bookings);
        res.send(bookings)
        
    } catch (error) {
        return res.status(400).json(error);
    }
  
});

router.delete("/deletebooking/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    await Booking.deleteOne({ _id: req.params.id });

    res.send("Booking deleted successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});



module.exports = router;
