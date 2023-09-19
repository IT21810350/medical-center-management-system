const mongoose = require("mongoose");

const lab_equipment = new mongoose.Schema({
   
},
    {
        timestamps : true
    });

modules.export = mongoose.model("LabEquipment",lab_equipment);