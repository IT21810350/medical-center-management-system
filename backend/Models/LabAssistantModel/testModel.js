const mongoose = require("mongoose");

const test = new mongoose.Schema({
    test_id : {
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
    lab_assistant_name : {
        type : String,
    },
    result_data : {
        type : String,
    }
},
    {
        timestamps : true
    });

const Test = mongoose.model("Test",test);

module.exports = Test;