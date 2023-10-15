const Sample = require("../Models/LabAssistantModel/sampleModel"); // Update the path accordingly

// SAMPLE
// Sample Controllers for each CRUD function
module.exports.createSamples = async (req, res, next) => {
  try {
    const { sample_name, sample_type, collection_date, status, lab_assistant_name } = req.body;

    const newSample = new Sample({
      sample_name,
      sample_type,
      collection_date,
      status,
      lab_assistant_name
    });

    const savedSample = await newSample.save();

    res.status(201).json(savedSample);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports.getAllSamples = async (req, res) => {
  try {
    const samples = await Sample.find();
    res.json({ message: "All Samples", samples });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.getSampleById = async (req, res) => {
  try {
    const sample = await Sample.findById(req.params.id);
    res.status(200).json({ message: "Sample details", sample });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.updateSampleById = async (req, res) => {
  try {
    const sampleId = req.params.id;
    const updates = req.body;
    const updatedSample = await Sample.findByIdAndUpdate(
      sampleId,
      updates,
      { new: true }
    );

    if (!updatedSample) {
      return res.status(404).json({ message: "Sample not found" });
    }

    res.status(200).json({
      message: "Sample with ID: " + sampleId + " has been updated",
      updatedSample,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.deleteSampleById = async (req, res) => {
  try {
    const sampleId = req.params.id;
    const sample = await Sample.findById(sampleId);

    if (!sample) {
      return res.status(404).json({ message: "Sample not found" });
    }

    await Sample.findByIdAndDelete(sampleId);
    res.status(200).json({ message: "Sample with ID: " + sampleId + " has been deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
