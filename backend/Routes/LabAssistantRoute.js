const express = require("express");
const router = express.Router();

// CRUD FUNCTION CONTROLLERS for each Model <- All CRUD Operations for each type exist here
const {
    CreateSampleController,
    getAllSampleController,
    getSampleByIdController,
    updateSampleByIdController,
    deleteSampleByIdController,
    createEquipmentController,
    getAllEquipmentController,
    getEquipmentByIdController,
    updateEquipmentByIdController,
    deleteEquipmentByIdController,
    createReportController,
    getAllReportController,
    getReportByIdController,
    updateReportByIdController,
    deleteReportByIdController,
    createTestController,
    getAllTestController,
    getTestByIdController,
    updateTestByIdController,
    deleteTestByIdController
} = require("../Controllers/LabAssistantController"); 


router.post("/lab-test", TestController);
router.post("/lab-equipment", EquipmentController);
router.post("/lab-report", ReportController);
router.post("/lab-sample", SampleController);

module.exports = router;