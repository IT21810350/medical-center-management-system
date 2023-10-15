const Symptoms = require("../Models/DoctorModels/SymptomsModel");
const PrescriptionModel = require("../Models/DoctorModels/PrescriptionModel");
const User = require("../Models/UserModel");
const DoctorProfile = require("../Models/DoctorModels/DoctorProfile");
const Channeling = require("../Models/PatientModel/channelingmodel");


module.exports.SymptomController = async (req, res, next) => {

    try {

        const symptomsData = req.body;

        const createdSymptoms = [];

        for (const symptom of symptomsData) {
            const symptomData = await Symptoms.create(symptom);
            createdSymptoms.push(symptomData);
        }

        res.status(201).json({
            message: "Symptom data added successfully",
            success: true,
            symptomsData: createdSymptoms,
        })

        // const { ...data } = req.body;

        // const symptomData = await Symptoms.create({ ...data });

        // res
        //     .status(201)
        //     .json({ message: "Symptom data added successfully", success: true, symptomData });

        // next();

    } catch (error) {
        console.error(error);
        json({ message: "Symptom data not added successfully" });
    }
};

module.exports.SearchChanneling = async (req, res) => {
    try {
        const { patientName, date, channelingSeverity, fromTime } = req.body;
        let query = {};

        if (patientName) query.patientName = patientName;
        if (date) query.date = date;
        if (channelingSeverity) query.channelingSeverity = channelingSeverity;
        if (fromTime) query.fromTime = fromTime;

        let channelings;
        let patientDetails;

        if (Object.keys(query).length === 0) {
            channelings = await Channeling.find();
            
            if(channelings.patient != null){
                patientDetails = await User.findById(channelings.patient)
            }
        } else {
            channelings = await Channeling.find(query);
        }

        res.status(201).json({
            message: "Channlings Data",
            success: true,
            Channelings: channelings,
            Patients: patientDetails,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Data not loaded properly' });
    }
};

module.exports.PrescriptionController = async (req, res) => {
    try {

        const prescriptionsData = req.body;

        const createdMedicines = [];

        for (const medicine of prescriptionsData) {
            const prescriptionData = await PrescriptionModel.create(medicine);
            createdMedicines.push(prescriptionData);
        }

        res.status(201).json({
            message: "Prescription data added successfully",
            success: true,
            prescriptionsData: createdMedicines,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Prescription data not loaded properly' });
    }
};

module.exports.GetPrescriptionController = async (req, res) => {
    try {
        const prescriptions = await PrescriptionModel.find();

        res.json({ message: "All prescriptions", prescriptions });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching users' });
    }
};

module.exports.GetDoctorProfileController = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        user.profile = await DoctorProfile.findOne({_id: user.profile._id});

        res.status(201).json({ message: "Doctor Details", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching users' });
    }
};

module.exports.SaveDoctorAvailableTime = async (req, res) =>{

    try {
        
        // finds user
        const userId = req.body.userId;
        const availableTimes = req.body.availableTimes;
        
        const user = await User.findById(userId);

        user.profile = await DoctorProfile.findOne({_id: user.profile._id});

        if (!user.profile) {
            return res.status(404).json({ error: 'Doctor profile not found.' });
        }

        const validAvailableTimes = availableTimes.filter((time) => {
            return time.startTime && time.endTime;
        });

        user.profile.availableTime = validAvailableTimes;

        await user.profile.save();

        return res.status(200).json({ message: 'Available times saved successfully.' });

    } catch (error) {

        console.error(error);
        return res.status(500).json({ error: 'An error occurred while saving available times.' });

    }
}