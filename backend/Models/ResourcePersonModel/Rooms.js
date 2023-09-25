const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({

    roomNumber: {type: String, required: true},
    status: { type: String },
    roomType: { type: String, required: true }
}, { 
    timestamps: true 
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;