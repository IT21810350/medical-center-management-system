const express = require("express");
const router = express.Router();

// REPORT
const {deleteReportById,getReportById,getAllReports,createReports,updateReportById} = require("../../Controllers/ReportController"); 

// create report
router.post("/reports",createReports);

// get all reports
router.get("/reports",getAllReports);

// get all reports by id
router.get("/reports/:id",getReportById);

// update report by id
router.put("/reports/:id",updateReportById);

// delete report by id
router.delete("/reports/:id",deleteReportById);

module.exports = router;