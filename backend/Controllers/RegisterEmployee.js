const EmployeeDetails = require("../Models/EmployeeModel");
const DoctorProfile = require("../Models/DoctorModels/DoctorProfile")
const UserModel = require("../Models/UserModel");

module.exports.RegisterEmployee = async (req, res, next) => {
  try {
    const { userId, nic, epf } = req.body;
    const employee = await EmployeeDetails.create({ nic, epf });

    const user = await UserModel.findById(userId);

    user.profile = await DoctorProfile.findOne({ _id: user.profile });
    user.profile.employeeDetails = employee;

    await user.profile.save();

    res.status(201).json({ message: "Employee Registered successfully", success: true, user });

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred", success: false });
  }
};
