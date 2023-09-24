const mongoose = require('mongoose');

const lab_sample = new mongoose.Schema({
    sample_id : {
        type : String, 
    },
    collection_date : {
        type : Date,
    },
    sample_type : {
        type : String,
    },
    status : {
        type : String,
    },
    lab_assistant_id : {
        type : String,
    }
},
    {
        timestamps : true,
    });

const LabSample = mongoose.model("labSample", lab_sample);

module.export = LabSample;