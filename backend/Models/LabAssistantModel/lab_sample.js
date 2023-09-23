const mongoose = require('mongoose');

const lab_sample = new mongoose.Schema({
    sample_id : {
        type : Number, 
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
        type : Number,
    }
},
{
    timestamps : true,
});

module.export = mongoose.model("labSample", lab_sample);