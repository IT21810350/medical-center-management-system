const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  report_name: {
    type: String,
    required: true, // report_name is now a required field
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  content: {
    type: String,
    required: true,
    minlength: 5, // Minimum length of content is set to 5 characters
  },
  lab_assistant_name: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
