const express = require("express");
const router = express.Router();

// REPORT
const {
    createReportController,
    getAllReportController,
    getReportByIdController,
    updateReportByIdController,
    deleteReportByIdController
} = require("../../Controllers/LabAssistantControllers/ReportController"); 

router.post("/lab-report",createReportController);
router.get("/lab-report",getAllReportController);
router.get("/lab-report/:reportId",getReportByIdController);
router.put("/lab-report/:reportId",updateReportByIdController);
router.delete("/lab-report/:reportId",deleteReportByIdController);

router.put("/lab-report/update/:reportId",updateReportByIdController);

module.exports = router;