const PharmacistProfile = require ("../Models/PharmacistModel/PharmacistProfile");
const MedicineProfile = require("../Models/PharmacistModel/MedicineProfile");

//Controller for pharmacist profile
module.experts.pharmacistProfile = async (req, res, next) => {
    try {
        const {firstName, lastName, emailAddress, contactNumber, gender, NIC, bio} = req.body;

        const pharmacistData = await PharmacistProfile.create({
            firstName, 
            lastName, 
            emailAddress, 
            contactNumber, 
            gender, 
            NIC, 
            bio

        });

        res.status(201).json({
            message : "Pharmacist profile data added successfully",
            success : true,
            registrationData
        });

        next();
        
    }catch (error) {
        console.error(error);
        res.status(500).json({
            message : "Pharmacist profile data not added successfully",
            success : false
        });

    }
}



//Controller for medicine profile
module.experts.MedicineProfile = async (req, res, next) => {
    try {
        const {medicineCode, medicineName, dosage, expiryDate, quantity, unitPrice} = req.body;

        const medicineData = await MedicineProfile.create({
            medicineCode,
            medicineName,
            dosage,
            expiryDate,
            quantity,
            unitPrice,
            

        });

        res.status(201).json({
            message : "Medicine profile data added successfully",
            success : true,
            registrationData
        });

        next();
        
    }catch (error) {
        console.error(error);
        res.status(500).json({
            message : "Medicine profile data not added successfully",
            success : false
        });

    }
}