const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema({
  equipment_name: {
    type: String,
  },
  manufacturer: {
    type: String,
  },
  purchase_date: {
    type: Date,
  },
  maintenance_schedule: {
    type: Date,
  },
  status: {
    type: String,
  },
}, {
  timestamps: true,
});

const Equipment = mongoose.model("Equipment", equipmentSchema);

module.exports = Equipment;
