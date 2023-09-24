const mongoose = require("mongoose");

const lab_equipment = new mongoose.Schema({
   equipment_id : {
        type : String,
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

const LabEquipment = mongoose.model("LabEquipment",lab_equipment);

module.export = LabEquipment;