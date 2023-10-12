//PATIENT PROFILE RELATED CRUD OPERATIONS
const router = require("express").Router();
const { request } = require("express");

let Patient = require("../../Models/PatientModel/Patientmodel");

//=====================================================

router.post('/add', async (req, res) => {
  const {
   
    country,
    idType,
    idNumber,
    fName,
    lName,
    gender,
    dob,
    phone,
    email,
    address,
    gName,
    relation,
    gId,
    gContact,
  } = req.body;

  try {
    const newPatient = new Patient({
      country,
    idType,
    idNumber,
    fName,
    lName,
    gender,
    dob,
    phone,
    email,
    address,
    gName,
    relation,
    gId,
    gContact,
    });

    await newPatient.save();

    res.status(201).json({ message: 'Patient registration successful' });
  } catch (error) {
    console.error('Error adding patient:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// router.route("/add").post((req, res) => {
//   const {
//       country,
//       idType,
//       identity,
//       firstName,
//       lastName,
//       gender,
//       dob,
//       phone,
//       email,
//       address,
//       agreeToTerms
//   } = req.body;

//   const newPatient = new Patient({
//       country,
//       idType,
//       identity,
//       firstName,
//       lastName,
//       gender,
//       dob,
//       phone,
//       email,
//       address,
//       agreeToTerms
//   });

//   newPatient.save()
//       .then((patient) => {
//           // Respond with the newly created patient data
//           res.status(201).json({ status: "Patient added", patient });
//       })
//       .catch((err) => {
//           console.error(err);
//           res.status(500).json({ status: "Error adding patient", error: err.message });
//       });
// });


//=====================================================
// READ data from database
router.route("/").get((req,res)=>{
    Patient.find().then((patients)=>{
        res.json(patients)
    }).catch((err)=>{
        console.log(err)
    })
})

// router.get('/patients', async (req, res) => {
//   try {
//     const patients = await Patient.find();

//     if (!patients || patients.length === 0) {
//       // No patients found
//       return res.status(404).json({ message: 'No patients found' });
//     }

//     // Patients found, send the data
//     return res.status(200).json(patients);
//   } catch (error) {
//     // Handle errors
//     console.error('Error retrieving patients:', error);
//     return res.status(500).json({ message: 'Error retrieving patients', error: error.message });
//   }
// });
//=====================================================
//UPDATE
// router.route("/update/:id").put(async(req,res)=>{
//     // let patientId = request.params.id;

//     // const{country,identity,firstName,lastName,gender,dob,phone,email,address,gName,relation,gId,gContact,} = req.body;

//     // //crate an object
//     // const updatePatient = {
//     //   country,
//     //   identity,
//     //   firstName,
//     //   lastName,
//     //   gender,
//     //   dob,
//     //   phone,
//     //   email,
//     //   address,
//     //   gName,
//     //   relation,
//     //   gId,
//     //   gContact,
//     // };
//     try {
//         // Use findByIdAndUpdate to find and update the patient
//         //const updatedPatient = await Patient.findByIdAndUpdate(patientId, updatePatient);
//         const updatedPatient = await Patient.findByIdAndUpdate(patientId, req.body,{ new: true, runValidators: true });

//         if (!updatedPatient) {
//           return res.status(404).send({ status: "Patient not found" });
//         }
    
//         return res.status(200).send({ status: "Patient details updated successfully" });
//       } catch (err) {
//         console.error(err);
//         return res.status(500).send({ status: "Error with updating details", error: err.message });
//       }
//     });

router.route("/update/:id").put(async (req, res) => {
  const patientId = req.params.id; // Extract the patient ID from the request parameters

  // const { country, identity, firstName, lastName, gender, dob, phone, email, address, gName, relation, gId, gContact } = req.body;

  // // Create an object
  // const updatePatient = {
  //     country,
  //     identity,
  //     firstName,
  //     lastName,
  //     gender,
  //     dob,
  //     phone,
  //     email,
  //     address,
  //     gName,
  //     relation,
  //     gId,
  //     gContact,
  // };

  try {
      // Use findByIdAndUpdate to find and update the patient
      // const updatedPatient = await Patient.findByIdAndUpdate(patientId, updatePatient);
      const updatedPatient = await Patient.findByIdAndUpdate(patientId, req.body, { new: true, runValidators: true });

      if (!updatedPatient) {
          return res.status(404).send({ status: "Patient not found" });
      }

      return res.status(200).send({ status: "Patient details updated successfully" });
  } catch (err) {
      console.error(err);
      return res.status(500).send({ status: "Error with updating details", error: err.message });
  }
});

//=====================================================
// DELETE
router.route("/deletepatient/:id").delete(async (req, res) => {
    // Use req.params.id to extract the ID from the request parameters
    let patientId = req.params.id;
  
    try {
      // Use findByIdAndDelete to find and delete the patient
      const deletedPatient = await Patient.findByIdAndDelete(patientId);
  
      if (!deletedPatient) {
        return res.status(404).send({ status: "Patient not found" });
      }
  
      return res.status(200).send({ status: "Patient deleted" });
    } catch (err) {
      console.error(err.message);
      return res.status(500).send({ status: "Error with deletion", error: err.message });
    }
  });
//=====================================================
//Select only one patient
// router.route("/get/:id").get(async (req,res) =>{
//     let patientId = req.params.id;
//     const patient = await Patient.findById(patientId)
//     .then((patient)=>{
//         res.status(200).send({status: "Patient found",patient})
//     }).catch((err)=>{
//         console.log(err.message);
//         res.status(500).send({status: "Error with getting patient", error: err.message});
//     })
// })

// router.route("/get/:id").get(async (req, res) => {
//   try {
//     const patientId = req.params.id;
//     const patient = await Patient.findById(patientId);
//     console.log('Patient ID:', patientId);
 
//     if (!patient) {
//       return res.status(404).json({ status: "Patient not found" });
//     }

//     return res.status(200).json({ status: "Patient found", patient });
//   } catch (err) {
//     console.error(err.message);
//     return res.status(500).json({ status: "Error with getting patient", error: err.message });
//   }
// });


// router.route("/get/:id").get(async(req,res) =>{
//   let userId = req.params.id;

//   const update = await Patient.findOne({patientId : userId})
//   //const supplier = await Supplier.findById(userId) 
//   .then((patient) =>{
//     console.log("Patient",patient)
//       res.status(200).send({status :"Supplier Data Successfully Fetched!!!!!!", patient});
//   }).catch((err) => {
//       console.log(err);
//       res.status(500).send({status: "Not Fetched. Error in the supplier data Fetched!!!!", error: err.message});
//   })
// }
// Define the route to get a single patient by ID
router.route("/get/:id").get(async (req, res) => {
  try {
    const patientId = req.params.id;
    const patient = await Patient.findById(patientId);
    
    if (!patient) {
      return res.status(404).json({ status: "Patient not found" });
    }

    return res.status(200).json({ status: "Patient found", patient });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ status: "Error with getting patient", error: err.message });
  }
});



module.exports = router;
