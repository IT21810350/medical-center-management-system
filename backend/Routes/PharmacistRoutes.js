const express = require("express");
const router = require("express").Router();
let Pharmacist = require("../Models/PharmacistModel/PharmacistProfile");



//pharmacistProfile
//url of create

router.route("/add").post((req,res)=>{

    const firstName     =  req.body.firstName;
    const lastName      =  req.body.lastName;
    const emailAddress  =  req.body.emailAddress;
    const contactNumber =  req.body.contactNumber;
    const gender        =  req.body.gender;
    const NIC           =  req.body.NIC;
    const bio           =  req.body.bio;

    const newPharmacist = new Pharmacist({
        firstName, 
        lastName, 
        emailAddress, 
        contactNumber, 
        gender, 
        NIC, 
        bio
    })


    newPharmacist.save().then(()=>{
        res.json("Data Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//http://Localhost

router.route("/").get((req,res)=>{
    Pharmacist.find().then((pharmacistProfile)=>{
        res.json(pharmacistProfile)
    }).catch((err)=>{
        console.log(err);
    })
})

//http//Localhost:

router.route("/update/:id").put(async(req,res)=>{
    let pharmacistId = res.params.id;
    const  { firstName, lastName, emailAddress, contactNumber, gender, NIC, bio } = req.body;
    
    const updateStudent = {
        firstName, 
        lastName, 
        emailAddress, 
        contactNumber, 
        gender, 
        NIC, 
        bio
    }

    const update = await Pharmacist.findByIdAndUpdate(pharmacistId,updatePharmacist).then(()=>{
        res.status(200).send({status : " Phamacist profile data updated"}) 
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status : " Error with updating data "});
    })

})

//http

router.route("/delete/:id").delete(async (req,res) => {
    let pharmacistId = req.params.id ;

    await Pharmacist.findByIdAndDelete(pharmacistId).then(()=> {
        res.status(200).send({status: "Pharmacist profile data  deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status : " Error with delete user", error : err.message});
    })

})

//Get only one user details

router.route("/get/:id").get(async (req,res) => {
    let pharmacistId = req.params.id;
    const user = await Pharmacist.findById(userId).then(()=>{
        res.status(200).send({status : " User fetched", Pharmacist})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status : "Error with get user", error : err.message});
    })
})



//Medicine Profile 


router.route("/medicineadd").post((req,res)=>{

    const medicineName  =  req.body.medicineName;
    const dosage        =  req.body.dosage;
    const medicineType  =  req.body.medicineType;
    const expiryDate    =  req.body.expiryDate;
    const availabilty   =  req.body.availabilty;
    

    const newPharmacist = new Pharmacist({
        medicineName, 
        dosage, 
        medicineType, 
        expiryDate, 
        availabilty
    })


    newPharmacist.save().then(()=>{
        res.json("Data Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//http://Localhost

router.route("/").get((req,res)=>{
    Pharmacist.find().then((medicineProfile)=>{
        res.json(medicineProfile)
    }).catch((err)=>{
        console.log(err);
    })
})

//http//Localhost:

router.route("/medicineupdate/:id").put(async(req,res)=>{
    let medicineId = res.params.id;
    const  { medicineName, dosage, medicineType, expiryDate, availabilty  } = req.body;
    
    const updateStudent = {
        medicineName, 
        dosage, 
        medicineType, 
        expiryDate, 
        availabilty
    }

    const update = await Pharmacist.findByIdAndUpdate(medicineId,updatePharmacist).then(()=>{
        res.status(200).send({status : " Medicine data updated"}) 
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status : " Error with updating data "});
    })

})

//http

router.route("/medicinedelete/:id").delete(async (req,res) => {
    let medicineId = req.params.id ;

    await Pharmacist.findByIdAndDelete(medicineId).then(()=> {
        res.status(200).send({status: "Medicine data  deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status : " Error with delete user", error : err.message});
    })

})

//Get only one user details

router.route("/get/:id").get(async (req,res) => {
    let medicineId = req.params.id;
    const user = await Pharmacist.findById(medicineId).then(()=>{
        res.status(200).send({status : " User fetched", Pharmacist})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status : "Error with get user", error : err.message});
    })
})

module.exports = router;