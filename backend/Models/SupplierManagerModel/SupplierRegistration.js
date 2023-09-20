const mongoose = require("mongoose");

const supplierDetailsSchema = new mongoose.Schema(
    {
        FirstName: {
            type: String,
            required: [true, "Supplier Firstname is required"],
            unique: true,
        },

        LastName: {
            type: String,
            required: [true, "Supplier lastname is required"],
        },

        Email: {
            type: String,
            required: [true, "Supplier email is required"],
        },

        PhoneNumber: {
            type: String,
            required: [true, "Supplier phone number is required"],
        },

        Address: {
            type: String,
            required: [true, "Supplier address is required"],
        },

        CompanyName: {
            type: String,
            required: [true, "Supplier company name is required"],
        },

        NIC: {
            type: String,
            required: [true, "Supplier NIC is required"],
        },

        Bio: {
            type: String,
            required: [true, "Supplier bio is required"],
        },

    }
);

module.exports = mongoose.model("supplierRegistration", supplierDetailsSchema);
