const mongoose = require("mongoose");

const lab_test = new mongoose.Schema({
    result_id : {
        type : String,
    },
    sample_id : { // refer to sample id in the sample table 
        type : String,
    },
    test_name : {
        type : String,
    },
    test_date : {
        type : Date,
    },
    lab_assistant_id : {
        type : String,
    },
    result_data : {
        type : String,
    }
},
    {
        timestamps : true
    });

const LabTest = mongoose.model("LabTest",lab_test);

module.exports = LabTest;