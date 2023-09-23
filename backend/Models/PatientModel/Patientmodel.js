const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    country: {
        type: String,
        required: true
    },
    idType: {
        type: String,
        required: true
    },
    idNumber: {
        type: String,
        required: true
    },

    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    })

const Patient = mongoose.model("Patient", patientSchema)

module.exports = Patient;