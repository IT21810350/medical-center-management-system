const Test = require("../../Models/LabAssistantModel/lab-test");

// TEST
// Test Controllers for each CRUD function
module.exports.createTestController = async (req, res, next) => {
  try {
      const {
          result_id,
          sample_id,
          test_name,
          test_date,
          lab_assistant_id,
          result_data,
      } = req.body;

      // Create a new test instance
      const test = new Test({
          result_id,
          sample_id,
          test_name,
          test_date: new Date(test_date), // Convert to Date type
          lab_assistant_id,
          result_data,
      });

      // Save the test to the database
      await test.save();

      res.status(201).json({ message: 'Test created successfully', test });
  } catch (error) {
      next(error);
  }
};

module.exports.getAllTestController = async (req, res, next) => {
  try {
      const testList = await Test.find();

      res.status(200).json({ testList });
  } catch (error) {
      next(error);
  }
};

module.exports.getTestByIdController = async (req, res, next) => {
  try {
      const { testId } = req.params;

      const test = await Test.findById(testId);

      if (!test) {
          return res.status(404).json({ message: 'Test not found' });
      }

      res.status(200).json({ test });
  } catch (error) {
      next(error);
  }
};

module.exports.updateTestByIdController = async (req, res, next) => {
  try {
      const { testId } = req.params;

      const {
          result_id,
          sample_id,
          test_name,
          test_date,
          lab_assistant_id,
          result_data,
      } = req.body;

      const updatedTest = await Test.findByIdAndUpdate(
          testId,
          {
              result_id,
              sample_id,
              test_name,
              test_date: new Date(test_date), // Convert to Date type
              lab_assistant_id,
              result_data,
          },
          { new: true }
      );

      if (!updatedTest) {
          return res.status(404).json({ message: 'Test not found' });
      }

      res.status(200).json({ message: 'Test updated successfully', test: updatedTest });
  } catch (error) {
      next(error);
  }
};

module.exports.deleteTestByIdController = async (req, res, next) => {
  try {
      const { testId } = req.params;

      const deletedTest = await Test.findByIdAndDelete(testId);

      if (!deletedTest) {
          return res.status(404).json({ message: 'Test not found' });
      }

      res.status(200).json({ message: 'Test deleted successfully' });
  } catch (error) {
      next(error);
  }
};