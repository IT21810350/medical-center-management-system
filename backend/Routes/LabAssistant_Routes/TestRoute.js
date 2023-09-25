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
router.get("/lab-test/:id",getTestByIdController);
router.put("/lab-test/:id",updateTestByIdController);
router.delete("/lab-test/:id",deleteTestByIdController);

router.post("/lab-test/update/:id",updateTestByIdController);

module.exports = router;