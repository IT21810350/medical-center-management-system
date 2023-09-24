const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const medicineSchema = new Schema({

    medicineName : {
        type :String,
        requied : true
    },
    dosage : {
        type: String,
        required : true
    },
    medicineType : {
        type : String,
        required : true
    },
    exoirtDate : {
        type :String,
        required : true
    },
    availability : {
        type : String,
        required : true
    }
    



})


const Pharmacist = mongoose.model("Pharmacist", medicineSchema);

module.exports = Pharmacist;