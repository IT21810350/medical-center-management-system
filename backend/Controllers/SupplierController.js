const supplierRegistrationModel = require("../Models/SupplierManagerModel/SupplierRegistration");
const supplierPaymentModel = require("../Models/SupplierManagerModel/SupplierManagerProfile");
const supplierManagerProfileModel = require("../Models/SupplierManagerModel/SupplierManagerProfile");
const SupplierInventoryMedicine = require('../Models//SupplierManagerModel/SupplierInventoryMedicine');

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
        const {  drugCode, drugName, specificationModel, unit, expiryDate, manufacturer, quantity, unitPrice,reOrderLevel } = req.body;

        const registrationData = await SupplierInventoryMedicine.create({
            
            drugCode,
            drugName,
            specificationModel,
            unit,
            expiryDate,
            manufacturer,
            quantity,
            unitPrice,
            reOrderLevel,
        });

        res.status(201).json({
            message: "inventory medicine data added successfully",
            success: true,
            registrationData
        });

        next();

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "inventory medicine data not added successfully",
            success: false
        });
    }
};
// Get all medicines
module.exports.getAllMedicines = async (req, res) => {
    try {
        const medicines = await SupplierInventoryMedicine.find();
        res.status(200).json({ status: 'success', data: medicines });
    } catch (error) {
        res.status(500).json({ status: 'fail', message: error.message });
    }
};

// Get a specific medicine by ID
module.exports.getMedicineById = async (req, res) => {
    try {
        const medicine = await SupplierInventoryMedicine.findById(req.params.id);
        res.status(200).json({ status: 'success', data: medicine });
    } catch (error) {
        res.status(404).json({ status: 'fail', message: 'Medicine not found' });
    }
};

// Update a medicine by ID
module.exports.updateMedicine = async (req, res) => {
    try {
        const medicine = await SupplierInventoryMedicine.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        res.status(200).json({ status: 'success', data: medicine });
    } catch (error) {
        res.status(404).json({ status: 'fail', message: 'Medicine not found' });
    }
};


// Delete a medicine by ID
module.exports.deleteMedicine = async (req, res) => {
    try {
        await SupplierInventoryMedicine.findByIdAndDelete(req.params.id);
        res.status(204).json({ status: 'success', data: null });
    } catch (error) {
        res.status(404).json({ status: 'fail', message: 'Medicine not found' });
    }
};
