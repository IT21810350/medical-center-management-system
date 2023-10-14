const mongoose = require('mongoose');

const report = new mongoose.Schema({
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
    lab_assistant_name : {
        type : String,
    }
},
    {
        timestamps : true,
    });

const Report = mongoose.model("Report", report);

module.exports = Report;