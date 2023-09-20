const mongoose = require("mongoose");

const LASchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    NIC: {
        type: Number,
        default: 0,
    }
},
    {
        timestamps : true
    });

module.export = mongoose.model("LabAssistantProfile",LASchema);