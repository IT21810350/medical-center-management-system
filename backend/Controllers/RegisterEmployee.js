const EmployeeDetails = require("../Models/EmployeeModel");
const DoctorProfile = require("../Models/DoctorModels/DoctorProfile");
const PatientProfile = require("../Models/PatientModel/PatientProfile");
const PharmacistProfile = require("../Models/PharmacistModel/PharmacistProfile");
const HumanResourceManagerProfile = require("../Models/hrmodel/HumanResourceManagerProfile");
const FinancialManagerProfile = require("../Models/FinancialManagerModel/FinancialManagerProfile");
const ResourcePersonProfile = require("../Models/ResourcePersonModel/ResourcePersonProfile");
const LabAssistantProfile = require("../Models/LabAssistantModel/LabAssistantProfile");
const SupplierManagerProfile = require("../Models/SupplierManagerModel/SupplierManagerProfile");
const UserModel = require("../Models/UserModel");
const { UserRole } = require("../Models/enum");

module.exports.RegisterEmployee = async (req, res, next) => {
  try {
    const { userId, role, nic, epf } = req.body;
    const employee = await EmployeeDetails.create({ nic, epf });

    const user = await UserModel.findById(userId);

    console.log('role = ' + role + 'line 19 RegisterEmployee');
    
    switch(role){
      case UserRole.PATIENT:
        user.profile = await PatientProfile.findOne({ _id: user.profile });
        break;
      case UserRole.DOCTOR:
        user.profile = await DoctorProfile.findOne({ _id: user.profile });
        break;
      case UserRole.PHARMACIST:
        user.profile = await PharmacistProfile.findOne({ _id: user.profile });
        break;
      case UserRole.HR:
        user.profile = await HumanResourceManagerProfile.findOne({ _id: user.profile });
        break;
      case UserRole.FINANCIAL_MANAGER:
        user.profile = await FinancialManagerProfile.findOne({ _id: user.profile });
        break;
      case UserRole.RESOURCE_PERSON:
        user.profile = await ResourcePersonProfile.findOne({ _id: user.profile });
        break;
      case UserRole.SUPPLIER_MANAGER:
        user.profile = await SupplierManagerProfile.findOne({ _id: user.profile });
        break;
      case UserRole.LAB_ASSISTANT:
        user.profile = await LabAssistantProfile.findOne({ _id: user.profile });
        break;
      default:
        return res.json({ message: "Invalid  role" });
    }
    
    user.profile.employeeDetails = employee;

    await user.profile.save();

    console.log('user detials \n' + user);

    res.status(201).json({ message: "Employee Registered successfully", success: true, user });

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred", success: false });
  }
};
