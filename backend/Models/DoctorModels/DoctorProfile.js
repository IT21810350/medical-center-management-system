const mongoose = require("mongoose");

const doctorProfile = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
        default: '', // You can set a default value if needed
    },
    lastName: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female'], // Assuming gender can only be 'male' or 'female'
    },
    addressLine1: {
        type: String,
        required: true,
    },
    addressLine2: {
        type: String,
        default: '', // You can set a default value if needed
    },
    city: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    specialty: {
        type: String,
        required: true,
    },
    licenseNumber: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        default: 0,
    },
    employeeDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EmployeeDetails'
    }
},
    {
        timestamps: true
    });

module.exports = mongoose.model("DoctorProfile", doctorProfile);

