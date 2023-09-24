const mongoose = require("mongoose");

const symptoms = new mongoose.Schema({

    symptom: {
        type: String,
    },
    since: {
        type: String,
    },
    bodyPart: {
        type: String,
    },
    serverityLevel: {
        type: String,
    }
},
    {
        timestamps: true
    });

module.exports = mongoose.model("Symptoms", symptoms);