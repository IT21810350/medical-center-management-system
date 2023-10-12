const mongoose = require("mongoose");

const doctorProfile = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
        default: '', 
    },
    lastName: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female'], 
    },
    addressLine1: {
        type: String,
        required: true,
    },
    addressLine2: {
        type: String,
        default: '', 
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
    },
    availableTime: [
        {
            day: {
                type: String,
                required: true,
            },
            startTime: {
                type: String,
                required: true,
            },
            endTime: {
                type: String,
                required: true,
            }
        }
    ]
},
{
    timestamps: true
});

module.exports = mongoose.model("DoctorProfile", doctorProfile);
