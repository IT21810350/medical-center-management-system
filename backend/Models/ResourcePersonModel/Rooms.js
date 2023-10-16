const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({

    name: {
        type: String, 
        required: true
    },
    rentPerDay: { 
        type: Number,
        require: true
    },
    type: { 
        type: String, 
        required: true 
    },
    imageUrls: [],
    currentBookings: [],
    description: {
        type: String,
        required: true
    }
}, { 
    timestamps: true 
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;