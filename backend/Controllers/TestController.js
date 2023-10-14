const Test = require("../Models/LabAssistantModel/testModel");

// TEST
// Test Controllers for each CRUD function
module.exports.createTests = async (req, res, next) => {
    try{
        const { test_id,sample_id,test_name,test_date,lab_assistant_name,result_data } = req.body;
    
        const newTest = new Test({
            test_id,
            sample_id,
            test_name,
            test_date,
            lab_assistant_name,
            result_data
        });
    
        const savedTest = await newTest.save();
    
        res.status(201).json(savedTest);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
};

module.exports.getAllTests = async (req, res) => {
    try {
        const tests = await Test.find();
        res.json({ message: "All Tests", tests });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
};

module.exports.getTestById = async (req, res) => {
    try {
        const test = await Test.findById(req.params.id);
        res.status(200).json({ message: "Test details", test });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
};

module.exports.updateTestById = async (req, res) => {
    try {
        const testId = req.params.id;
        const updates = req.body;
        const updatedTest = await Test.findByIdAndUpdate(
          testId,
          updates,
          { new: true }
        );
    
        if (!updatedTest) {
          return res.status(404).json({ message: "Test not found" });
        }
    
        res.status(200).json({
          message: "Test with ID: " + testId + " has been updated",
          updatedTest,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports.deleteTestById = async (req, res) => {
    try {
        const testId = req.params.id;
        const test = await Test.findById(testId);
    
        if (!test) {
          return res.status(404).json({ message: "Test not found" });
        }
    
        await Test.findByIdAndDelete(testId);
        res.status(200).json({ message: "Test with ID: " + testId + " has been deleted" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
};