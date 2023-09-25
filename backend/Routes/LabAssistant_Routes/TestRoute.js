const express = require("express");
const router = express.Router();

// TEST
const {
    createTestController,
    getAllTestController,
    getTestByIdController,
    updateTestByIdController,
    deleteTestByIdController
} = require("../../Controllers/LabAssistantControllers/TestController"); 

router.post("/lab-test",createTestController);
router.get("/lab-test",getAllTestController);
router.get("/lab-test/:testId",getTestByIdController);
router.put("/lab-test/:testId",updateTestByIdController);
router.delete("/lab-test/:testId",deleteTestByIdController);

router.post("/lab-test/update/:testId",updateTestByIdController);

module.exports = router;