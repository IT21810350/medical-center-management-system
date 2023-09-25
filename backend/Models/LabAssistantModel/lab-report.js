const mongoose = require('mongoose');

const lab_report = new mongoose.Schema({
    report_id : {
        type : String,
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
        type : String,
    }
},
    {
        timestamps : true,
    });

const LabReport = mongoose.model("labReport", lab_report);

module.export = LabReport;