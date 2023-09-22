const mongoose = require("mongoose");

const supplierManagerProfileSchema = new mongoose.Schema(
    {
        FirstName: {
            type: String,
            required: [true, "Manager Firstname is required"],
        },

        LastName: {
            type: String,
            required: [true, "Manager lastname is required"],
        },

        Email: {
            type: String,
            required: [true, "Manager email is required"],
        },

        PhoneNumber: {
            type: String,
            required: [true, "Manager phone number is required"],
        },

        Address: {
            type: String,
            required: [true, "Manager address is required"],
        },

        CompanyName: {
            type: String,
            required: [true, "Manager company name is required"],
        },

        NIC: {
            type: String,
            required: [true, "Manager NIC is required"],
        },

        Bio: {
            type: String,
            required: [true, "Manager bio is required"],
        },

    }
);

module.exports = mongoose.model("supplierManagerProfile", supplierManagerProfileSchema);
