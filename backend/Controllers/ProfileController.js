const DoctorProfile = require ("../Models/DoctorModels/DoctorProfile");
const PatientProfile = require("../Models/PatientModel/PatientProfile");
const PharmacistProfile = require("../Models/PharmacistModel/PharmacistProfile");
const HumanResourceManagerProfile = require("../Models/hrmodel/HumanResourceManagerProfile");
const FinancialManagerProfile = require("../Models/FinancialManagerModel/FinancialManagerProfile");
const ResourcePersonProfile = require("../Models/ResourcePersonModel/ResourcePersonProfile");
const LabAssistantProfile = require("../Models/LabAssistantModel/LabAssistantProfile");
const SupplierManagerProfile = require("../Models/SupplierManagerModel/SupplierManagerProfile");
const UserModel = require("../Models/UserModel")
const {UserRole} = require("../Models/enum");

module.exports.CreateProfile = async (req, res, next) => {
    try {
        const { userId, role, ...profileData } = req.body;

        let userProfile;
        switch (role) {
            case UserRole.PATIENT:
                userProfile = await PatientProfile.create({ ...profileData });
                break;
            case UserRole.DOCTOR:
                userProfile = await DoctorProfile.create({ ...profileData });
                break;
            case UserRole.PHARMACIST:
                userProfile = await PharmacistProfile.create({...profileData});
                break;
            case UserRole.HR:
                userProfile = await HumanResourceManagerProfile.create({...profileData});
                break;
            case UserRole.FINANCIAL_MANAGER:
                userProfile = await FinancialManagerProfile.create({...profileData});
                break;
            case UserRole.RESOURCE_PERSON:
                userProfile = await ResourcePersonProfile.create({...profileData});
                break;
            case UserRole.SUPPLIER_MANAGER:
                userProfile = await SupplierManagerProfile.create({...profileData});
                break;
            case UserRole.LAB_ASSISTANT:
                userRole = await LabAssistantProfile.create({...profileData});
                break;
            default:
                return res.json({ message: "Invalid  role" });
        }

        const user = await UserModel.findById(userId).populate('profile');
        user.profile = userProfile;
        await user.save();

        res.status(201).json({ message: "Profile created successfully", success: true, user });

        next();

    } catch (error) {
        console.error(error);
    }
};
