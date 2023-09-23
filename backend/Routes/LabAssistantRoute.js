const express = require("express");
const router = express.Router();

// CONTROLLERS 
const {SampleController} = require("../Controllers/LabAssistantController");
const {EquipmentController} = require("../Controllers/LabAssistantController");
const {ReportController} = require("../Controllers/LabAssistantController");
const {TestController} = require("../Controllers/LabAssistantController");

// CRUD FUNCTION CONTROLLERS for each Model <- All CRUD Operations for each type exist here
const {CreateSampleController} = require("../Controllers/LabAssistantController");
const {getAllSampleController} = require("../Controllers/LabAssistantController");
const {getSampleByIdController} = require("../Controllers/LabAssistantController");
const {updateSampleByIdController} = require("../Controllers/LabAssistantController");
const {deleteSampleByIdController} = require("../Controllers/LabAssistantController");

const {createEquipmentController} = require("../Controllers/LabAssistantController");
const {getAllEquipmentController} = require("../Controllers/LabAssistantController");
const {getEquipmentByIdController} = require("../Controllers/LabAssistantController");
const {updateEquipmentByIdController} = require("../Controllers/LabAssistantController");
const {deleteEquipmentByIdController} = require("../Controllers/LabAssistantController");

const {createReportController} = require("../Controllers/LabAssistantController");
const {getAllReportController} = require("../Controllers/LabAssistantController");
const {getReportByIdController} = require("../Controllers/LabAssistantController");
const {updateReportByIdController} = require("../Controllers/LabAssistantController");
const {deleteReportByIdController} = require("../Controllers/LabAssistantController");

const {createTestController} = require("../Controllers/LabAssistantController");
const {getAllTestController} = require("../Controllers/LabAssistantController");
const {getTestByIdController} = require("../Controllers/LabAssistantController");
const {updateTestByIdController} = require("../Controllers/LabAssistantController");
const {deleteTestByIdController} = require("../Controllers/LabAssistantController");


router.post("/lab-test", TestController);
router.post("/lab-equipment", EquipmentController);
router.post("/lab-report", ReportController);
router.post("/lab-sample", SampleController);

module.exports = router;