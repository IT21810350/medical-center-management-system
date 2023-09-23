const mongoose = require("mongoose");

const lab_equipment = new mongoose.Schema({
   equipment_id : {
        type : Number,
   },
   name : {
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

modules.export = mongoose.model("LabEquipment",lab_equipment);