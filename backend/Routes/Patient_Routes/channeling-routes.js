const router = require("express").Router();
const { request } = require("express");

// let Channels = require("../../Models/PatientModel/channelings");

// router.post('/add', async (req, res) => {
//     const {
//       date,
//       time,
//       patient,
//       doctor,
     
//     } = req.body;
  
//     try {
//       const newC = new Channels({
//         date,
//         time,
//         patient,
//         doctor,
        
//       });
  
//       await newC.save();
  
//       res.status(201).json({ message: 'Chanelling successful' });
//     } catch (error) {
//       console.error('Error adding chanel:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
// const express = require('express');
// const router = express.Router();
const Channeling = require('../../Models/PatientModel/channelingmodel'); // Import the Channeling model

router.post('/add', async (req, res) => {
  const {
    // date,
    // appointmentNumber,
    // patient,
    // doctor,
    // prescription,
    // labReports,
    // payments,
    patientId,
            bookingId,
            doctorId, 
  } = req.body;

  try {
    const newChanneling = new Channeling({
      // date,
      // appointmentNumber,
      // patient,
      // doctor,
      // prescription,
      // labReports,
      // payments,
      patientId,
            bookingId,
            doctorId, 
    });

    const savedChanneling = await newChanneling.save();

    res.status(201).json({ message: 'Channeling successful', data: savedChanneling });
  } catch (error) {
    console.error('Error adding channeling:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

  
//cs = channelings
  router.route("/").get((req,res)=>{
    Channels.find().then((cs)=>{
        res.json(cs)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/updatec/:id").put(async (req, res) => {
    const cId = req.params.id;
    const {  date,time,patient,doctor, } = req.body;
  
    try {
      // Find the inquiry by ID
      const channel = await Channels.findById(cId);
  
      if (!channel) {
        return res.status(404).send({ status: "Inq not found" });
      }
  
      // Update the inquiry details
      channel.date = date;
      channel.time = time;
      channel.patient = patient;
      channel.doctor = doctor;
  
      // Save the updated inquiry
      await channel.save();
  
      return res.status(200).send({ status: "channel details updated successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).send({ status: "Error with updating channel", error: err.message });
    }
  });
  

  // DELETE
router.route("/deletec/:id").delete(async (req, res) => {
    // Use req.params.id to extract the ID from the request parameters
    let cId = req.params.id;
  
    try {
      // Use findByIdAndDelete to find and delete the inq
      const deleteC = await Inquiries.findByIdAndDelete(cId);
  
      if (!deleteC) {
        return res.status(404).send({ status: "Chanenl not found" });
      }
  
      return res.status(200).send({ status: "Chanenl deleted" });
    } catch (err) {
      console.error(err.message);
      return res.status(500).send({ status: "Error with deletion of Chanenl", error: err.message });
    }
  });

  router.route("/get/:id").get(async(req,res) => {
    const fetchC = async () => {
      try {
    
        const url = window.location.href;
        const parts = url.split('/');
        const id = parts[parts.length - 1]
    
        const response = await axios.get(`http://localhost:4000/cData/` + id);
        setc(response.data);
      } catch (error) {
        console.error('Error fetching chaneling for editing:', error);
      }
    }});
    
    module.exports = router;