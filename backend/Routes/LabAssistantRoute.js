const express = require("express");
const router = express.Router();
const {SampleController} = require("../Controllers/DoctorController");
const {EquipmentController} = require("../Controllers/LabAssistantController");
const {ReportController} = require("../Controllers/LabAssistantController");
const {TestController} = require("../Controllers/LabAssistantController");

router.post("/lab-test", TestController);
router.post("/lab-equipment", EquipmentController);
router.post("/lab-report", ReportController);
router.post("/lab-sample", SampleController);

module.exports = router;