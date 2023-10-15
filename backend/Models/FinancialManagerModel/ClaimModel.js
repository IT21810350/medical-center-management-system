const mongoose = require('mongoose');

const claim = new mongoose.Schema({
    patientID: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient' 
    },
    serviceID: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service' 
    },
    dateOfService: Date,
    claimAmount: Number,
    status: String,
}, 
  { 
    timestamps: true 
});

const Claim = mongoose.model('Claim',claim);

module.exports = Claim;