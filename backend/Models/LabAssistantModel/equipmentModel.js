const mongoose = require("mongoose");

const equipment = new mongoose.Schema({
   equipment_id : {
        type : String,
   },
   equipment_name : {
        type : String,
   }, 
   manufacturer : {
        type : String,
   },
   purchase_date : {
        type : Date,
   },
   maintainence_schedule : {
        type : Date,
   }, 
   status : {
        type : String,
   }
},
    {
        timestamps : true
    });

const Equipment = mongoose.model("Equipment",equipment);

module.exports = Equipment;