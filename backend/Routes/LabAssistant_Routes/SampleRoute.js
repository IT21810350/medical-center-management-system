const express = require("express");
const router = express.Router();

// SAMPLE
const {
    createSampleController,
    getAllSampleController,
    getSampleByIdController,
    updateSampleByIdController,
    deleteSampleByIdController
} = require("../../Controllers/SampleController"); 

router.post("/lab-sample",createSampleController);
router.get("/lab-sample/:id",getAllSampleController);
router.get("/lab-sample/:id",getSampleByIdController);
router.put("/lab-sample/:id",updateSampleByIdController);
router.delete("/lab-sample/:id",deleteSampleByIdController);

router.put("/lab-sample/update/:id",updateSampleByIdController);

module.exports = router;