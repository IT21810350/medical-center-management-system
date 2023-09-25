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
router.get("/lab-report/:id",getReportByIdController);
router.put("/lab-report/:id",updateReportByIdController);
router.delete("/lab-report/:id",deleteReportByIdController);

router.put("/lab-report/update/:id",updateReportByIdController);

module.exports = router;