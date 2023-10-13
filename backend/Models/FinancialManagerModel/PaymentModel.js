const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  date: Date,
  invoiceNumber: String,
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',ref: 'Doctor',ref: 'Prescription',ref: 'LabReport',
  },
  
});

const pay = mongoose.model('pay', paymentSchema);

module.exports = pay;
