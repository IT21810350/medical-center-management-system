const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({

    description: {
        type: String,
    },
    severityLevel: {
        type: String,
        enum: ['mild', 'moderate', 'severe'],
        required: true,
    },
    since: {
        type: Date,
    },
    bodyPart: {
        type: String,
    },
    complainDate: {
        type: Date,
        default: new Date(),
    }
},
{ 
    timestamps: true 
});

const Complaint = mongoose.model("Complaint", complaintSchema);

module.exports = Complaint;