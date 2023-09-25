const mongoose = require("mongoose");

const roomTypeSchema = new mongoose.Schema({

    roomType: { type: String, required: true },
    description: { type: String }
}, { 
    timestamps: true 
});

const RoomType = mongoose.model("RoomType", roomTypeSchema);

module.exports = RoomType;