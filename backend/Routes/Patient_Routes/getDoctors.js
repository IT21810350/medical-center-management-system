const express = require('express');
const router = express.Router();
let Doctors = require('../../Models/DoctorModels/DoctorProfile');



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
})

module.exports = router;
