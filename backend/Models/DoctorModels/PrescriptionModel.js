const mongoose = require("mongoose");

const prescriptions = new mongoose.Schema({

    medicine: {
        type: String,
    },
    dosage: {
        type: String,
    },
    quantity: {
        type: String,
    },
    frequency: {
        type: String,
    },
    hours: {
        type: String,
    },
    duration: {
        type: String,
    },
    take: {
        type: String,
    }
},
    {
        timestamps: true
    });

module.exports = mongoose.model("Prescriptions", prescriptions);