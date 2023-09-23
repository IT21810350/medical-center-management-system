const Sample = require("../Models/LabAssistantModel/lab_sample");
const Equipment = require("../Models/LabAssistantModel/lab-equipment");
const Report = require("../Models/LabAssistantModel/lab-report");
const Test = require("../Models/LabAssistantModel/lab-test");

module.exports.SampleController = {
    // Create a new sample
    createSample: async (req, res, next) => {
      try {
        const { sampleId, patientName, sampleType, collectionDate } = req.body;
        const newSample = new Sample({ sampleId, patientName, sampleType, collectionDate });
        await newSample.save();
        res.status(201).json(newSample);
      } catch (error) {
        next(error);
      }
    },
  
    // Read all samples
    getAllSamples: async (req, res, next) => {
      try {
        const samples = await Sample.find();
        res.status(200).json(samples);
      } catch (error) {
        next(error);
      }
    },
  
    // Read a single sample by ID
    getSampleById: async (req, res, next) => {
      try {
        const { id } = req.params;
        const sample = await Sample.findById(id);
        if (!sample) {
          return res.status(404).json({ message: 'Sample not found' });
        }
        res.status(200).json(sample);
      } catch (error) {
        next(error);
      }
    },
  
    // Update a sample by ID
    updateSampleById: async (req, res, next) => {
      try {
        const { id } = req.params;
        const { sampleId, patientName, sampleType, collectionDate } = req.body;
  
        const updatedSample = await Sample.findByIdAndUpdate(
          id,
          { sampleId, patientName, sampleType, collectionDate },
          { new: true }
        );
  
        if (!updatedSample) {
          return res.status(404).json({ message: 'Sample not found' });
        }
  
        res.status(200).json(updatedSample);
      } catch (error) {
        next(error);
      }
    },
  
    // Delete a sample by ID
    deleteSampleById: async (req, res, next) => {
      try {
        const { id } = req.params;
        const deletedSample = await Sample.findByIdAndRemove(id);
        if (!deletedSample) {
          return res.status(404).json({ message: 'Sample not found' });
        }
        res.status(204).end(); // No content response for successful delete
      } catch (error) {
        next(error);
      }
    },
};

// Sample Controllers for each CRUD Operation
module.exports.CreateSampleController = async (req, res, next) => {
};

module.exports.getAllSampleController = async (req, res, next) => {  
};

module.exports.getSampleByIdController = async (req, res, next) => {
};

module.exports.updateSampleByIdController =  async (req, res, next) => {
};

module.exports.deleteSampleByIdController = async (req, res, next) => {
};


module.exports.EquipmentController = {
    // Create a new equipment
    createEquipment: async (req, res, next) => {
      try {
        // Extract equipment data from the request body
        const { name, description, serialNumber } = req.body;
  
        // Create a new equipment instance
        const newEquipment = new Equipment({ name, description, serialNumber });
  
        // Save the new equipment to the database
        await newEquipment.save();
  
        // Send a success response with the created equipment
        res.status(201).json(newEquipment);
      } catch (error) {
        next(error);
      }
    },
  
    // Read all equipment
    getAllEquipment: async (req, res, next) => {
      try {
        // Retrieve all equipment from the database
        const equipment = await Equipment.find();
  
        // Send a success response with the equipment list
        res.status(200).json(equipment);
      } catch (error) {
        next(error);
      }
    },
  
    // Read a single equipment by ID
    getEquipmentById: async (req, res, next) => {
      try {
        const { id } = req.params;
  
        // Retrieve equipment by ID from the database
        const equipment = await Equipment.findById(id);
  
        // Check if equipment exists
        if (!equipment) {
          return res.status(404).json({ message: 'Equipment not found' });
        }
  
        // Send a success response with the retrieved equipment
        res.status(200).json(equipment);
      } catch (error) {
        next(error);
      }
    },
  
    // Update equipment by ID
    updateEquipmentById: async (req, res, next) => {
      try {
        const { id } = req.params;
  
        // Extract updated equipment data from the request body
        const { name, description, serialNumber } = req.body;
  
        // Update the equipment in the database
        const updatedEquipment = await Equipment.findByIdAndUpdate(
          id,
          { name, description, serialNumber },
          { new: true }
        );
  
        // Check if equipment was found and updated
        if (!updatedEquipment) {
          return res.status(404).json({ message: 'Equipment not found' });
        }
  
        // Send a success response with the updated equipment
        res.status(200).json(updatedEquipment);
      } catch (error) {
        next(error);
      }
    },
  
    // Delete equipment by ID
    deleteEquipmentById: async (req, res, next) => {
      try {
        const { id } = req.params;
  
        // Delete equipment from the database
        const deletedEquipment = await Equipment.findByIdAndRemove(id);
  
        // Check if equipment was found and deleted
        if (!deletedEquipment) {
          return res.status(404).json({ message: 'Equipment not found' });
        }
  
        // Send a no-content response for successful delete
        res.status(204).end();
      } catch (error) {
        next(error);
      }
    },
};

// Equipment Controllers for each CRUD function
module.exports.createEquipmentController = async (req, res, next) => {
};

module.exports.getAllEquipmentController = async (req, res, next) => {
};

module.exports.getEquipmentByIdController = async (req, res, next) => {
};

module.exports.updateEquipmentByIdController = async (req, res, next) => {
};

module.exports.deleteEquipmentByIdController =  async (req, res, next) => {
};

module.exports.ReportController = {
  // Create a new report
  createReport: async (req, res, next) => {
    try {
      // Extract report data from the request body
      const { reportName, createdDate, labAssistantId } = req.body;

      // Create a new report instance
      const newReport = new Report({ reportName, createdDate, labAssistantId });

      // Save the new report to the database
      await newReport.save();

      // Send a success response with the created report
      res.status(201).json(newReport);
    } catch (error) {
      next(error);
    }
  },

  // Read all reports
  getAllReports: async (req, res, next) => {
    try {
      // Retrieve all reports from the database
      const reports = await Report.find();

      // Send a success response with the reports list
      res.status(200).json(reports);
    } catch (error) {
      next(error);
    }
  },

  // Read a single report by ID
  getReportById: async (req, res, next) => {
    try {
      const { id } = req.params;

      // Retrieve report by ID from the database
      const report = await Report.findById(id);

      // Check if report exists
      if (!report) {
        return res.status(404).json({ message: 'Report not found' });
      }

      // Send a success response with the retrieved report
      res.status(200).json(report);
    } catch (error) {
      next(error);
    }
  },

  // Update report by ID
  updateReportById: async (req, res, next) => {
    try {
      const { id } = req.params;

      // Extract updated report data from the request body
      const { reportName, createdDate, labAssistantId } = req.body;

      // Update the report in the database
      const updatedReport = await Report.findByIdAndUpdate(
        id,
        { reportName, createdDate, labAssistantId },
        { new: true }
      );

      // Check if report was found and updated
      if (!updatedReport) {
        return res.status(404).json({ message: 'Report not found' });
      }

      // Send a success response with the updated report
      res.status(200).json(updatedReport);
    } catch (error) {
      next(error);
    }
  },

  // Delete report by ID
  deleteReportById: async (req, res, next) => {
    try {
      const { id } = req.params;

      // Delete report from the database
      const deletedReport = await Report.findByIdAndRemove(id);

      // Check if report was found and deleted
      if (!deletedReport) {
        return res.status(404).json({ message: 'Report not found' });
      }

      // Send a no-content response for successful delete
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },
};

// Report Controllers for each CRUD function
module.exports.createReportController = async (req, res, next) => {
};

module.exports.getAllReportController = async (req, res, next) => {
};

module.exports.getReportByIdController = async (req, res, next) => {
};

module.exports.updateReportByIdController = async (req, res, next) => {
};

module.exports.deleteReportByIdController =  async (req, res, next) => {
};

module.exports.TestController = {
    // Create a new medical test
    createTest: async (req, res, next) => {
      try {
        const { name, description, price, duration } = req.body;
  
        const newTest = new Test({ name, description, price, duration });
        await newTest.save();
  
        res.status(201).json(newTest);
      } catch (error) {
        next(error);
      }
    },
  
    // Read all medical tests
    getAllTests: async (req, res, next) => {
      try {
        const tests = await MedicalTest.find();
        res.status(200).json(tests);
      } catch (error) {
        next(error);
      }
    },
  
    // Read a single medical test by ID
    getTestById: async (req, res, next) => {
      try {
        const { id } = req.params;
        const test = await MedicalTest.findById(id);
  
        if (!test) {
          return res.status(404).json({ message: 'Medical test not found' });
        }
  
        res.status(200).json(test);
      } catch (error) {
        next(error);
      }
    },
  
    // Update a medical test by ID
    updateTestById: async (req, res, next) => {
      try {
        const { id } = req.params;
        const { name, description, price, duration } = req.body;
  
        const updatedTest = await MedicalTest.findByIdAndUpdate(
          id,
          { name, description, price, duration },
          { new: true }
        );
  
        if (!updatedTest) {
          return res.status(404).json({ message: 'Medical test not found' });
        }
  
        res.status(200).json(updatedTest);
      } catch (error) {
        next(error);
      }
    },
  
    // Delete a medical test by ID
    deleteTestById: async (req, res, next) => {
      try {
        const { id } = req.params;
        const deletedTest = await MedicalTest.findByIdAndRemove(id);
  
        if (!deletedTest) {
          return res.status(404).json({ message: 'Medical test not found' });
        }
  
        res.status(204).end(); // No content response for successful delete
      } catch (error) {
        next(error);
      }
    },
};

// Test Controllers for each CRUD function
module.exports.createTestController = async (req, res, next) => {
};

module.exports.getAllTestController = async (req, res, next) => {
};

module.exports.getTestByIdController = async (req, res, next) => {
};

module.exports.updateTestByIdController = async (req, res, next) => {
};

module.exports.deleteTestByIdController =  async (req, res, next) => {
};
