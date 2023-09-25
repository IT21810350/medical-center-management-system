const Report = require("../../Models/LabAssistantModel/lab-report");

// REPORT
// Report Controllers for each CRUD function
module.exports.createReportController = async (req, res, next) => {
  try {
      const {
          report_id,
          report_name,
          created_date,
          content,
          lab_assistant_id,
      } = req.body;

      // Create a new report instance
      const report = new Report({
          report_id,
          report_name,
          created_date: new Date(created_date), // Convert to Date type
          content,
          lab_assistant_id,
      });

      // Save the report to the database
      await report.save();

      res.status(201).json({ message: 'Report created successfully', report });
  } catch (error) {
      next(error);
  }
};

module.exports.getAllReportController = async (req, res, next) => {
  try {
      const reportList = await Report.find();

      res.status(200).json({ reportList });
  } catch (error) {
      next(error);
  }
};

module.exports.getReportByIdController = async (req, res, next) => {
  try {
      const { reportId } = req.params;

      const report = await Report.findById(reportId);

      if (!report) {
          return res.status(404).json({ message: 'Report not found' });
      }

      res.status(200).json({ report });
  } catch (error) {
      next(error);
  }
};

module.exports.updateReportByIdController = async (req, res, next) => {
  try {
      const { reportId } = req.params;

      const {
          report_id,
          report_name,
          created_date,
          content,
          lab_assistant_id,
      } = req.body;

      const updatedReport = await Report.findByIdAndUpdate(
          reportId,
          {
              report_id,
              report_name,
              created_date: new Date(created_date), // Convert to Date type
              content,
              lab_assistant_id,
          },
          { new: true }
      );

      if (!updatedReport) {
          return res.status(404).json({ message: 'Report not found' });
      }

      res.status(200).json({ message: 'Report updated successfully', report: updatedReport });
  } catch (error) {
      next(error);
  }
};

module.exports.deleteReportByIdController = async (req, res, next) => {
  try {
      const { reportId } = req.params;

      const deletedReport = await Report.findByIdAndDelete(reportId);

      if (!deletedReport) {
          return res.status(404).json({ message: 'Report not found' });
      }

      res.status(200).json({ message: 'Report deleted successfully' });
  } catch (error) {
      next(error);
  }
};