const mongoose = require("mongoose");

const doctorProfile = new mongoose.Schema({

    firstName:{
        type: String,
    },
    lastname:{
        type: String,
    },
    specialization:{
        type: String,
    },
    experienceYears: {
        type: Number,
        default: 0
    }
},
{ 
    timestamps: true 
});

module.exports = mongoose.model("DoctorProfile", doctorProfile);

