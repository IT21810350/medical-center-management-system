const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InqSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    },
    
},
    {
        timestamps: true
    })

const Inq = mongoose.model("Inq", InqSchema)

module.exports = Inq;