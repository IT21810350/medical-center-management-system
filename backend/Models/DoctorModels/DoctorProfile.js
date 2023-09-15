const mongoose = require("mongoose");

const doctorProfile = new mongoose.Schema({

    firstName: {
        type: String,
    },
    lastname: {
        type: String,
    },
    specialization: {
        type: String,
    },
    experienceYears: {
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

