const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const medicineSchema = new Schema({

    medicineCode : {
        type :String,
        requied : true
    },
    medicineName : {
        type: String,
        required : true
    },
    dosage : {
        type : String,
        required : true
    },
    medicineType : {
        type :String,
        required : true
    },
    availability : {
        type : String,
        required : true
    },
    expiryDate : {
        type : String,
        required : true
    }
   



})


const Pharmacist = mongoose.model("Pharmacist", medicineSchema);

module.exports = Pharmacist;