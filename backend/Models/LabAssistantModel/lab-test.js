const mongoose = require("mongoose");

const lab_test = new mongoose.Schema({
    
},
    {
        timestamps : true
    });

modules.export = mongoose.model("LabTest",lab_test);