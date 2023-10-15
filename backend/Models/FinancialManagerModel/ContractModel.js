const mongoose = require('mongoose');

const contract = new mongoose.Schema({
    vendorID: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Insurance' 
    },
    startDate: Date,
    endDate: Date,
    terms: String,
    status: String,
}, { 
    timestamps: true 
});

const Contract = mongoose.model('Contract',contract);

module.exports = Contract;