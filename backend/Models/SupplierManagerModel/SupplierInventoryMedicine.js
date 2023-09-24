const mongoose = require("mongoose");

const supplierInventoryMedicineSchema = new mongoose.Schema(
    {
        drugCode: {
            type: String,
            required: [true, "Manager Firstname is required"],
        },

        drugName: {
            type: String,
            required: [true, "Manager lastname is required"],
        },

        specificationModel: {
            type: String,
            required: [true, "Manager email is required"],
        },

        unit: {
            type: String,
            required: [true, "Manager phone number is required"],
        },

        expiryDate: {
            type: String,
            required: [true, "Manager address is required"],
        },

        manufacturer: {
            type: String,
            required: [true, "Manager company name is required"],
        },

        quantity: {
            type: String,
            required: [true, "Manager NIC is required"],
        },

        unitPrice: {
            type: String,
            required: [true, "Manager bio is required"],
        },

    }
);

module.exports = mongoose.model('SupplierInventoryMedicine', supplierInventoryMedicineSchema);
