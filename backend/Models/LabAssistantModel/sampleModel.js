const mongoose = require('mongoose');

const sample = new mongoose.Schema({
    sample_id: {
        type: String,
    },
    sample_type : {
        type : String,
    },    
    collection_date : {
        type : Date,
    },
    status : {
        type : String,
    },
    lab_assistant_name : {
        type : String,
    }
},
    {
        timestamps : true,
    });

const Sample = mongoose.model("Sample", sample);
module.exports = Sample;