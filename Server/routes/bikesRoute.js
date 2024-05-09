const express = require("express");
const router = express.Router();
const Bike = require("../models/bikeModel");







router.get("/getallbikes", async (req, res) => {
  try {
    const bikes = await Bike.find();
    res.send(bikes);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/addbike", async (req, res) => {
  try {
    const newbike = new Bike(req.body);
    console.log(newbike);
    await newbike.save();
    res.send("Bike added successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/editbike", async (req, res) => {
  try {
    const bike = await Bike.findOne({ _id: req.body._id });
    console.log(bike);
    bike.name = req.body.name;
    bike.image = req.body.image;
    bike.fuelType = req.body.fuelType;
    bike.rentPerHour = req.body.rentPerHour;
    bike.capacity = req.body.capacity;
    bike.type=req.body.type

    await bike.save();

    res.send("Bike details updated successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.delete("/deletebike/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    await Bike.deleteOne({ _id: req.params.id });

    res.send("Bike deleted successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
