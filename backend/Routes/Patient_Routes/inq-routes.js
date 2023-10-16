//PATIENT PROFILE RELATED CRUD OPERATIONS
const router = require("express").Router();
const { request } = require("express");

let Inquiries = require("../../Models/PatientModel/inquiries");

//=====================================================
//CREATE A PATIENT BEFORE MAKE A CHANNELLING

router.post('/add', async (req, res) => {
  const {
    name,
    subject,
    message,
   
  } = req.body;

  try {
    const newInq = new Inquiries({
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
    Inquiries.find().then((inqs)=>{
        res.json(inqs)
    }).catch((err)=>{
        console.log(err)
    })
})
//=====================================================
//UPDATE
router.route("/updateinq/:id").put(async(req,res)=>{
    // let inqId = req.params.id;

    // const{name,subject,message} = req.body;

    // //crate an object
    // const updateInq = {
    //     name,subject,message
    // };
    try {
        // Use findByIdAndUpdate to find and update the inq
        const updatedInq = await Inquiries.findByIdAndUpdate(req.params.id, req.body,{ new: true, runValidators: true });
    
        if (!updatedInq) {
          return res.status(404).send({ status: "Inq not found" });
        }
    
        return res.status(200).send({ status: "Inq details updated successfully" });
      } catch (err) {
        console.error(err);
        return res.status(500).send({ status: "Error with updating inqs", error: err.message });
      }
    });

    

// 
// router.route("/updateinq/:id").put(async (req, res) => {
//   const inqId = req.params.id;
//   const { name, subject, message } = req.body;

//   try {
//     // Find the inquiry by ID
//     const inquiry = await Inquiries.findByIdAndUpdate(inqId);

//     if (!inquiry) {
//       return res.status(404).send({ status: "Inq not found" });
//     }

//     // Update the inquiry details
//     inquiry.name = name;
//     inquiry.subject = subject;
//     inquiry.message = message;

//     // Save the updated inquiry
//     await inquiry.save();

//     return res.status(200).send({ status: "Inq details updated successfully" });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send({ status: "Error with updating inq", error: err.message });
//   }
// });


//=====================================================
// DELETE
router.route("/deleteinq/:id").delete(async (req, res) => {
    // Use req.params.id to extract the ID from the request parameters
    let inqId = req.params.id;
  
    try {
      // Use findByIdAndDelete to find and delete the inq
      const deletedInq = await Inquiries.findByIdAndDelete(inqId);
  
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

// router.route("/get/:id").get(async(req,res) => {
//   try{
//     const inqId = req.params.id;
//     const inq = await Inq.findById(inqId);

//     if(!inq){
//       return res.status(404).json({status: "Inquery not found" });
//     }

//     return res.status(200).json({status: "Inquery found", patient });
//   } catch (err) {
//     console.error(err.message);
//     return res.status(500).json({ status: "Error with getting inq", error: err.message });
//   }
// });
//========================================================================
// router.route("/get/:id").get(async (req,res) =>{
//     let inqId = req.params.id;
//     const inq = await Inquiries.findById(inqId)
//     .then((inq)=>{
//         res.status(200).send({status: "Inq found",inq})
//     }).catch((err)=>{
//         console.log(err.message);
//         res.status(500).send({status: "Error with getting inq", error: err.message});
//     })
// })

// router.route("/get/:id").get(async (req, res) => {
//   let inqId = req.params.id; 
//   const inq = await Inquiries.findOne({id:inqId}).then((inquery) =>{
//     res.status(200).send({status: "Inquery fetched", inquery})
//   }).catch((err) => {
//     console.log(err.message);
//     res.status(500).send({status:"Error with inq", error: err.message});
//   })
// })

router.route("/get/:id").get(async (req, res) => {
  try {
    const inqId = req.params.id;
    const inq = await Inquiries.findById(inqId);
    
    if (!inq) {
      return res.status(404).json({ status: "Inquiry not found" });
    }

    return res.status(200).json({ status: "Inquiry found", inq });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ status: "Error with getting Inquiry", error: err.message });
  }
});

// router.route("/get/:id").get(async(req,res) => {
// const fetchInquiry = async () => {
//   try {

//     const url = window.location.href;
//     const parts = url.split('/');
//     const id = parts[parts.length - 1]

//     const response = await axios.get(`http://localhost:4000/inqData/` + id);
//     setInquiry(response.data);
//   } catch (error) {
//     console.error('Error fetching inquiry for editing:', error);
//   }
// }});

module.exports = router;
