const mongoose = require("mongoose");

const roomType = new mongoose.Schema({

    roomType: {
        type: String,
    },
    description: {
        type: String,
    },
},
{ 
    timestamps: true 
});

const room = mongoose.model("Complaint", roomType);

module.exports = room;