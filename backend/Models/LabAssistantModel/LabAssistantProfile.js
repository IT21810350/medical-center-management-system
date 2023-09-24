const mongoose = require("mongoose");

const LASchema = new mongoose.Schema({
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

module.export = mongoose.model("LabAssistantProfile",LASchema);