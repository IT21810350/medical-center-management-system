const mongoose = require('mongoose');

const channelingSchema = new mongoose.Schema({
  date: Date,
  //appointmentNumber: String,
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'User'
  },
  booking: {
    type: String,
    required: true
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'DoctorProfile'
  },
  symptoms: [{
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'Symptoms'
  }],
  prescription:{
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'Prescriptions'
  },
  labReports:[{
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'Report'
  }]
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
