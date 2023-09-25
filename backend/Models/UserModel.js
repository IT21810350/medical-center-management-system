const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  role: {
    type: String,
    enum: ['patient', 'doctor', 'hr', 'pharmacist', 'financialManager', 'resourcePerson', 'supplierManager', 'labAssistant'],
    required: [true, "User role is required"],
},
  createdAt: {
    type: Date,
    default: new Date(),
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'profiles'
}
});

const profiles = {
  'patient': 'PatientProfile',
  'doctor': 'DoctorProfile',
  'hr': 'HumanResourceManagerProfile',
  'pharmacist': 'PharmacistProfile',
  'financialManager': 'FinancialManagerProfile',
  'resourcePerson': 'ResourcePersonProfile',
  'supplierManager': 'SupplierManagerProfile',
  'labAssistant': 'LabAssistantProfile'
};

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);