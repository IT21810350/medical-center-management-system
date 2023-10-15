const mongoose = require('mongoose');

const channelingSchema = new mongoose.Schema({
  //date: Date,
  //appointmentNumber: String,
  patient: {
    type: String,
    required: true
},
booking: {
  type: String,
  required: true
},
doctor: {
  type: String,
  required: true
},
date: Date,
 
  // prescription: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Prescription',
  // },
  // labReports: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'LabReport',
  // }],
  // payments: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Payment',
  // }],
});

const Channeling = mongoose.model('Channeling', channelingSchema);

module.exports = Channeling;
