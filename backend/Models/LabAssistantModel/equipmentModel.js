const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema({
  equipment_name: {
    type: String,
    required: true, // Equipment name is now a required field
    minlength: 3, // Minimum length of equipment name is set to 3 characters
  },
  manufacturer: {
    type: String,
    required: true,
  },
  purchase_date: {
    type: Date,
    required: true,
  },
  maintenance_schedule: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["Operational", "Under Maintenance", "Out of Service"], // Status should be one of these values
  },
}, {
  timestamps: true,
});

const Equipment = mongoose.model("Equipment", equipmentSchema);

module.exports = Equipment;
