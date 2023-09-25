const mongoose = require('mongoose');

const channelingSchema = new mongoose.Schema({
  date: String,
  time: String,
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
  },
  
});

const Channeling = mongoose.model('Channeling', channelingSchema);

module.exports = Channeling;
