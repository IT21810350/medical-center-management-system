const mongoose = require('mongoose');

const channelingSchema = new mongoose.Schema({
  date: Date,
  //appointmentNumber: String,
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
  },
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
