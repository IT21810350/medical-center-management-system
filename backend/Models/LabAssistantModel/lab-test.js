const mongoose = require("mongoose");

const lab_test = new mongoose.Schema({
    result_id : {
        type : Number,
    },
    sample_id : { // refer to sample id in the sample table 
        type : Number,
    },
    test_name : {
        type : String,
    },
    test_date : {
        type : Date,
    },
    labAssistant_id : {
        type : Number,
    },
    result_data : {
        type : String,
    }
},
    {
        timestamps : true
    });

modules.export = mongoose.model("LabTest",lab_test);