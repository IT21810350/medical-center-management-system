const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  report_id :{
    type: String,
  },
  report_name: {
    type: String,
  },
  created_date: {
    type: Date,
  },
  content: {
    type: String,
    required: true,
  },
  lab_assistant_name: {
    type: String,
  },
}, {
  timestamps: true,
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
