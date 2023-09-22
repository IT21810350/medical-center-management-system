const Symptoms = require("../Models/DoctorModels/SymptomsModel");


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
        json({ message: "Symptom data not added successfully"});
    }
}