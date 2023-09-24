const Sample = require("../../Models/LabAssistantModel/lab_sample");

// SAMPLE
// Sample Controllers for each CRUD Operation
module.exports.createSampleController = async (req, res, next) => {
  try {
      const {
          sample_id,
          collection_date,
          sample_type,
          status,
          lab_assistant_id,
      } = req.body;

      // Create a new sample instance
      const sample = new Sample({
          sample_id,
          collection_date: new Date(collection_date), // Convert to Date type
          sample_type,
          status,
          lab_assistant_id,
      });

      // Save the sample to the database
      await sample.save();

      res.status(201).json({ message: 'Sample created successfully', sample });
  } catch (error) {
      next(error);
  }
};

module.exports.getAllSampleController = async (req, res, next) => {
  try {
      const sampleList = await Sample.find();

      res.status(200).json({ sampleList });
  } catch (error) {
      next(error);
  }
};

module.exports.getSampleByIdController = async (req, res, next) => {
  try {
      const { sampleId } = req.params;

      const sample = await Sample.findById(sampleId);

      if (!sample) {
          return res.status(404).json({ message: 'Sample not found' });
      }

      res.status(200).json({ sample });
  } catch (error) {
      next(error);
  }
};

module.exports.updateSampleByIdController = async (req, res, next) => {
  try {
      const { sampleId } = req.params;

      const {
          sample_id,
          collection_date,
          sample_type,
          status,
          lab_assistant_id,
      } = req.body;

      const updatedSample = await Sample.findByIdAndUpdate(
          sampleId,
          {
              sample_id,
              collection_date: new Date(collection_date), // Convert to Date type
              sample_type,
              status,
              lab_assistant_id,
          },
          { new: true }
      );

      if (!updatedSample) {
          return res.status(404).json({ message: 'Sample not found' });
      }

      res.status(200).json({ message: 'Sample updated successfully', sample: updatedSample });
  } catch (error) {
      next(error);
  }
};

module.exports.deleteSampleByIdController = async (req, res, next) => {
  try {
      const { sampleId } = req.params;

      const deletedSample = await Sample.findByIdAndDelete(sampleId);

      if (!deletedSample) {
          return res.status(404).json({ message: 'Sample not found' });
      }

      res.status(200).json({ message: 'Sample deleted successfully' });
  } catch (error) {
      next(error);
  }
};