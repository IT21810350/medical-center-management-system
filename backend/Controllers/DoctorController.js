const Symptoms = require("../Models/DoctorModels/SymptomsModel");
const PrescriptionModel = require("../Models/DoctorModels/PrescriptionModel");
const User = require("../Models/UserModel");
const DoctorProfile = require("../Models/DoctorModels/DoctorProfile");
const Channeling = require("../Models/PatientModel/channelingmodel");
const Patient = require("../Models/PatientModel/Patientmodel");

module.exports.SymptomController = async (req, res, next) => {

    try {

        const symptomsData = req.body.symptoms;
        const channelingId = req.body.channelingId;

        const createdSymptoms = [];

        for (const symptom of symptomsData) {
            const symptomData = await Symptoms.create(symptom);
            createdSymptoms.push(symptomData);
        }

        const channeling = await Channeling.findById(channelingId);

        if (channeling) {
            // Add the newly created symptoms to the 'symptoms' array
            channeling.symptoms = [...channeling.symptoms, ...createdSymptoms];

            // Save the updated Channeling document
            await channeling.save();
        }

        res.status(201).json({
            message: "Symptom data added successfully",
            success: true,
            symptomsData: createdSymptoms,
            channelingData: channeling
        });


    } catch (error) {
        console.error(error);
        json({ message: "Symptom data not added successfully" });
    }
};

// module.exports.SearchChanneling = async (req, res) => {
//     try {
//         const { patientName, date, channelingSeverity, fromTime } = req.body;
//         let query = {};

//         if (patientName) query.patientName = patientName;
//         if (date) query.date = date;
//         if (channelingSeverity) query.channelingSeverity = channelingSeverity;
//         if (fromTime) query.fromTime = fromTime;

//         let channelings;

//         if (Object.keys(query).length === 0) {
//             channelings = await Channeling.find();

//             for (const channeling of channelings) {

//                 if (channeling.patient != null) {
//                     channeling.patient = await User.findOne({ _id: channeling.patient._id });
//                     channeling.doctor = await DoctorProfile.findOne({ _id: channeling.doctor._id });
//                 }
//             }

//         } else {
//             channelings = await Channeling.find(query);

//             for (const channeling of channelings) {

//                 if (channeling.patient != null) {
//                     channeling.patient = await User.find({ username: query.patientName });
//                     channeling.doctor = await DoctorProfile.find({ firstName: query.patientName });
//                 }
//             }
//         }

//         res.status(201).json({
//             message: "Channlings Data",
//             success: true,
//             Channelings: channelings
//         });

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Data not loaded properly' });
//     }
// };

module.exports.PrescriptionController = async (req, res) => {
    try {

        const prescriptionsData = req.body.medicines;
        const channelingId = req.body.channelingId;

        const createdMedicines = [];

        for (const medicine of prescriptionsData) {
            const prescriptionData = await PrescriptionModel.create(medicine);
            createdMedicines.push(prescriptionData);
        }

        const channeling = await Channeling.findById(channelingId);

        if (channeling) {

            channeling.prescription = [...channeling.prescription, ...createdMedicines];

            await channeling.save();
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

        user.profile = await DoctorProfile.findOne({ _id: user.profile._id });

        res.status(201).json({ message: "Doctor Details", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching users' });
    }
};

module.exports.SaveDoctorAvailableTime = async (req, res) => {

    try {

        // finds user
        const userId = req.body.userId;
        const availableTimes = req.body.availableTimes;

        const user = await User.findById(userId);

        user.profile = await DoctorProfile.findOne({ _id: user.profile._id });

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

module.exports.SearchChanneling = async (req, res) => {
    try {
        const { patientName, date, channelingSeverity, fromTime } = req.body;
        const query = {};

        if (patientName) query.patientName = patientName;
        if (date) query.date = date;
        if (channelingSeverity) query.channelingSeverity = channelingSeverity;
        if (fromTime) query.fromTime = fromTime;

        const channelings = await Channeling.find().populate('patient').populate('doctor');

        for (const channeling of channelings) {

            if (channeling.patient != null) {
                channeling.patient = await User.findOne({ _id: channeling.patient._id });
                channeling.patient.profile = await Patient.findOne({ _id: channeling.patient.profile._id });
            }

            if (channeling.doctor != null) {
                channeling.doctor = await DoctorProfile.findOne({ _id: channeling.doctor._id });
            }
        }

        const filteredChannelings = channelings.filter(channeling => {
            let match = true;

            if (patientName && channeling.patient) {
                match = channeling.patient.username === patientName;
            }

            if (date) {
                const channelingDate = new Date(channeling.date).toISOString().split('T')[0];
                match = match && channelingDate === date;
            }

            return match;
        });

        res.status(201).json({
            message: "Channelings Data",
            success: true,
            Channelings: filteredChannelings,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Data not loaded properly' });
    }
};

module.exports.getAllChannelings = async (req, res) => {

    const channelings = await Channeling.find({ prescription: { $exists: false, $eq: null } });

    for (const channeling of channelings) {

        if (channeling.patient != null) {

            channeling.patient = await User.findOne({ _id: channeling.patient._id });
            channeling.patient.profile = await Patient.findOne({ _id: channeling.patient.profile._id })
        }

        if (channeling.doctor != null) {

            channeling.doctor = await DoctorProfile.findOne({ _id: channeling.doctor._id });
        }
    }

    res.status(201).json({
        message: "Channelings Data",
        success: true,
        channelings: channelings,
    });
}

module.exports.getChannelingsById = async (req, res) => {

    const channelingId = req.params.id;
    const channeling = await Channeling.findById(channelingId);


    if (channeling.patient != null) {

        channeling.patient = await User.findOne({ _id: channeling.patient._id });
        channeling.patient.profile = await Patient.findOne({ _id: channeling.patient.profile._id })
    }

    if (channeling.doctor != null) {

        channeling.doctor = await DoctorProfile.findOne({ _id: channeling.doctor._id });
    }

    const channelingData = { ...channeling._doc };

    if (channeling.symptoms != null) {

        const symptomIds = channeling.symptoms;
        const symptomData = [];

        for (const symptomId of symptomIds) {
            const symptom = await Symptoms.findById(symptomId);

            if (symptom) {
                symptomData.push(symptom);
            }

        }

        channelingData.symptoms = symptomData;

    }

    if (channeling.prescription != null) {

        const prescriptionIds = channeling.prescription;
        const prescriptionData = [];

        for (const prescriptionId of prescriptionIds) {

            const prescription = await PrescriptionModel.findById(prescriptionId);

            if (prescription) {
                prescriptionData.push(prescription);
            }
        }

        channelingData.prescription = prescriptionData;
    }

    res.status(201).json({
        message: "Channeling Data",
        success: true,
        channeling: channelingData,
    });

}
