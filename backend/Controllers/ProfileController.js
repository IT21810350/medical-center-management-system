const DoctorProfile = require ("../Models/DoctorModels/DoctorProfile");
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
