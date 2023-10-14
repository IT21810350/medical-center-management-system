const Report = require("../Models/LabAssistantModel/reportModel");

// REPORT
// Report Controllers for each CRUD function
module.exports.createReports = async (req, res, next) => {
  try{
    const { report_id ,report_name ,created_date,content ,lab_assistant_name } = req.body;

    const newReport = new Report({
      report_id,
      report_name,
      created_date,
      content,
      lab_assistant_name
    });

    const savedReport = await newReport.save();

    res.status(201).json(savedReport);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports.getAllReports = async (req, res) => {
    try {
        const reports = await Report.find();
        res.json({ message: "All Reports", reports });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
};

module.exports.getReportById = async (req, res) => {
    try {
        const report = await Report.findById(req.params.id);
        res.status(200).json({ message: "Report details", report });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
};

module.exports.updateReportById = async (req, res) => {
    try {
        const reportId = req.params.id;
        const updates = req.body;
        const updatedReport = await Report.findByIdAndUpdate(
          reportId,
          updates,
          { new: true }
        );
    
        if (!updatedReport) {
          return res.status(404).json({ message: "Report not found" });
        }
    
        res.status(200).json({
          message: "Report with ID: " + reportId + " has been updated",
          updatedSample,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports.deleteReportById = async (req, res) => {
    try {
        const reportId = req.params.id;
        const report = await Report.findById(reportId);
    
        if (!report) {
          return res.status(404).json({ message: "Report not found" });
        }
    
        await Report.findByIdAndDelete(reportId);
        res.status(200).json({ message: "Report with ID: " + reportId + " has been deleted" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
};