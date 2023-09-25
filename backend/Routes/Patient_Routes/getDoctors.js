const express = require('express');
const router = express.Router();
let Doctors = require('../../Models/DoctorModels/DoctorProfile');

let Prescriptions = require('../../Models/DoctorModels/PrescriptionModel');



// // Route to get all doctor details
// router.get('/', async (req, res) => {
//   try {
//     const doctors = await DoctorProfile.find();
//     res.json(doctors);
//   } catch (error) {
//     console.error('Error fetching doctors:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

router.route("/").get((req,res)=>{
    Doctors.find().then((doctorprofiles)=>{
        res.json(doctorprofiles)
    }).catch((err)=>{
        console.log(err)
    })
});

router.route("/get/:id").get(async (req, res) => {
    try {
      const dId = req.params.id;
      const doctor = await Doctors.findById(dId);
      
      if (!doctor) {
        return res.status(404).json({ status: "Patient not found" });
      }
  
      return res.status(200).json({ status: "Doctor found", doctor });
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ status: "Error with getting doctor", error: err.message });
    }
  });
  

  //Get all prescriptions
  router.route("/pres/").get((req,res)=>{
    Prescriptions.find().then((pres)=>{
        res.json(pres)
    }).catch((err)=>{
        console.log(err)
    })
});

module.exports = router;
