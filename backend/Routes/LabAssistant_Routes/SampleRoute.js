const express = require("express");
const router = express.Router();

// SAMPLE
const {
    createSampleController,
    getAllSampleController,
    getSampleByIdController,
    updateSampleByIdController,
    deleteSampleByIdController
} = require("../../Controllers/LabAssistantControllers/SampleController"); 

router.post("/lab-sample",createSampleController);
router.get("/lab-sample/:sampleId",getAllSampleController);
router.get("/lab-sample/:sampleId",getSampleByIdController);
router.put("/lab-sample/:sampleId",updateSampleByIdController);
router.delete("/lab-sample/:sampleId",deleteSampleByIdController);

router.put("/lab-sample/update/:sampleId",updateSampleByIdController);

module.exports = router;