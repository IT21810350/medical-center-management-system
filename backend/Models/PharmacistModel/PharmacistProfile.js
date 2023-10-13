const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pharmacistSchema = new Schema({

    firstName : {
        type :String,
        requied : true
    },
    lastName : {
        type: String,
        required : true
    },
    emailAddress : {
        type : String,
        required : true
    },
    contactNumber : {
        type :String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    nic : {
        type : String,
        required:true
    },
    bio : {
        type : String,
        required : true
    }



})


const Pharmacist = mongoose.model("Pharmacist", pharmacistSchema);

module.exports = Pharmacist;