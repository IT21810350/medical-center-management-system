const Sample = require("../Models/LabAssistantModel/sampleModel");

// SAMPLE
// Sample Controllers for each CRUD Operation
module.exports.createSampleController = async (req, res, next) => {
    try {
      const newSample = new Sample(req.body);
      const savedSample = await newSample.save();
      res.status(201).json(savedSample);
    } catch (error) {
      next(error);
    }
  };
  
  module.exports.getAllSampleController = async (req, res, next) => {
    try {
      const samples = await Sample.find();
      res.status(200).json(samples);
    } catch (error) {
      next(error);
    }
  };
  
  module.exports.getSampleByIdController = async (req, res, next) => {
    const { sampleId } = req.params;
    try {
      const sample = await Sample.findById(sampleId);
      if (!sample) {
        return res.status(404).json({ message: 'Sample not found' });
      }
      res.status(200).json(sample);
    } catch (error) {
      next(error);
    }
  };
  
  module.exports.updateSampleByIdController = async (req, res, next) => {
    const { sampleId } = req.params;
    try {
      const updatedSample = await Sample.findByIdAndUpdate(
        sampleId,
        req.body,
        { new: true } // Return the updated document
      );
      if (!updatedSample) {
        return res.status(404).json({ message: 'Sample not found' });
      }
      res.status(200).json(updatedSample);
    } catch (error) {
      next(error);
    }
  };
  
  module.exports.deleteSampleByIdController = async (req, res, next) => {
    const { sampleId } = req.params;
    try {
      const deletedSample = await Sample.findByIdAndDelete(sampleId);
      if (!deletedSample) {
        return res.status(404).json({ message: 'Sample not found' });
      }
      res.status(200).json({ message: 'Sample deleted successfully' });
    } catch (error) {
      next(error);
    }
  };