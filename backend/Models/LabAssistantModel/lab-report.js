const mongoose = require('mongoose');

const lab_report = new mongoose.Schema({
    report_id : {
        type : Number,
    },
    report_name : {
        type : String,
    },
    created_date : {
        type : Date,
    },
    content : {
        type : String,
    },
    lab_assistant_id : {
        type : Number,
    }
},
    {
        timestamps : true,
    });

module.export = mongoose.model("labReport", lab_report);