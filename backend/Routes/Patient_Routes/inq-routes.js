//PATIENT PROFILE RELATED CRUD OPERATIONS
const router = require("express").Router();
const { request } = require("express");

let Inq = require("../../Models/PatientModel/inq");

//=====================================================
//CREATE A PATIENT BEFORE MAKE A CHANNELLING

router.post('/add', async (req, res) => {
  const {
    name,
    subject,
    message,
   
  } = req.body;

  try {
    const newInq = new Inq({
      name,
      subject,
      message,
      
    });

    await newInq.save();

    res.status(201).json({ message: 'Patient registration successful' });
  } catch (error) {
    console.error('Error adding patient:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//=====================================================
// READ data from database
router.route("/").get((req,res)=>{
    Inq.find().then((inqs)=>{
        res.json(inqs)
    }).catch((err)=>{
        console.log(err)
    })
})
//=====================================================
//UPDATE
router.route("/update/:id").put(async(req,res)=>{
    let inqId = request.params.id;

    const{name,subject,message} = req.body;

    //crate an object
    const updateInq = {
        name,subject,message
    };
    try {
        // Use findByIdAndUpdate to find and update the inq
        const updatedInq = await Inq.findByIdAndUpdate(inqId, updateInq);
    
        if (!updatedInq) {
          return res.status(404).send({ status: "Inq not found" });
        }
    
        return res.status(200).send({ status: "Inq details updated successfully" });
      } catch (err) {
        console.error(err);
        return res.status(500).send({ status: "Error with updating inqs", error: err.message });
      }
    });

//=====================================================
// DELETE
router.route("/deleteinq/:id").delete(async (req, res) => {
    // Use req.params.id to extract the ID from the request parameters
    let inqId = req.params.id;
  
    try {
      // Use findByIdAndDelete to find and delete the inq
      const deletedInq = await Inq.findByIdAndDelete(inqId);
  
      if (!deletedInq) {
        return res.status(404).send({ status: "Inq not found" });
      }
  
      return res.status(200).send({ status: "Inq deleted" });
    } catch (err) {
      console.error(err.message);
      return res.status(500).send({ status: "Error with deletion of inq", error: err.message });
    }
  });
//=====================================================
//Select only one patient
router.route("/get/:id").get(async (req,res) =>{
    let inqId = req.params.id;
    const inq = await Inq.findById(inqId)
    .then((inq)=>{
        res.status(200).send({status: "Inq found",inq})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with getting inq", error: err.message});
    })
})

module.exports = router;
