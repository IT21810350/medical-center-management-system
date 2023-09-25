const mongoose = require("mongoose");

const LASchema = new mongoose.Schema({
    lab_assistant_id : {
        type: String,
    },
    firstName: {
        type: String,
        //require: [true,"lab Assistant first Name is required"]
    },
    lastName: {
        type: String,
        //require: [true,"lab Assistant Last Name is required"],
    },
    gender : {
        type: String,
    },
    phoneNumber : {
        type: String,
    },
    emailAddress : {
        type: String,
    },
    NIC: {
        type: String,
    }
},
    {
        timestamps : true
    });

const LA =  mongoose.model("LabAssistantProfile",LASchema);

module.export = LA;