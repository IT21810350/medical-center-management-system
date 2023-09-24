const supplierRegistrationModel = require("../Models/SupplierManagerModel/SupplierRegistration");
const supplierPaymentModel = require("../Models/SupplierManagerModel/SupplierManagerProfile");
const supplierManagerProfileModel = require("../Models/SupplierManagerModel/SupplierManagerProfile");
const SupplierInventoryMedicineModel = require('../Models/SupplierManagerModel/SupplierInventoryMedicine');

// Controller for supplier registration
module.exports.registerSupplier = async (req, res, next) => {
    try {
        const { FirstName, LastName, Email, PhoneNumber, Address, CompanyName, NIC, Bio } = req.body;

        const registrationData = await supplierRegistrationModel.create({
            FirstName,
            LastName,
            Email,
            PhoneNumber,
            Address,
            CompanyName,
            NIC,
            Bio
        });

        res.status(201).json({
            message: "Supplier registration data added successfully",
            success: true,
            registrationData
        });

        next();

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Supplier registration data not added successfully",
            success: false
        });
    }
};

// Controller for supplier Profile
module.exports.profileSupplier = async (req, res, next) => {
    try {
        const { FirstName, LastName, Email, PhoneNumber, Address, CompanyName, NIC, Bio } = req.body;

        const registrationData = await supplierManagerProfileModel.create({
            FirstName,
            LastName,
            Email,
            PhoneNumber,
            Address,
            CompanyName,
            NIC,
            Bio
        });

        res.status(201).json({
            message: "Supplier profile data added successfully",
            success: true,
            registrationData
        });

        next();

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Supplier profile data not added successfully",
            success: false
        });
    }
};


 //Controller for supplier payment
 module.exports.addSupplierPayment = async (req, res, next) => {
    try {
        const { InvoiceNo, Date, NoOfItems, PaidAmount, SupplierID, Company, TotalAmount } = req.body;

        const paymentData = await supplierPaymentModel.create({
            InvoiceNo,
            Date,
            NoOfItems,
            PaidAmount,
            SupplierID,
            Company,
            TotalAmount
        });

       res.status(201).json({
            message: "Supplier payment data added successfully",
            success: true,
             paymentData
       });

        next();

     } catch (error) {
         console.error(error);
        res.status(500).json({
             message: "Supplier payment data not added successfully",
             success: false
         });
    }
 };

 //Controller for inventory medicine
 
module.exports.inventoryMedicine = async (req, res, next) => {
    try {
        const {  no ,drugCode,drugName,specificationModel,unit ,expiryDate,manufacturer,quantity,unitPrice,} = req.body;

        const registrationData = await supplierManagerProfileModel.create({
            no ,
            drugCode,
            drugName,
            specificationModel,
            unit ,
            expiryDate,
            manufacturer,
            quantity,
            unitPrice,
        });

        res.status(201).json({
            message: "Supplier profile data added successfully",
            success: true,
            registrationData
        });

        next();

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Supplier profile data not added successfully",
            success: false
        });
    }
};

