const express = require("express");
const router = express.Router();

// CRUD FUNCTION CONTROLLERS for each Model <- All CRUD Operations for each type exist here
const {
    createLabAssistantController,
    deleteLabAssistantByIdController,
    getAllLabAssistantController,
    getLabAssistantByIdController,
    updateLabAssistantByIdController
} = require("../../Controllers/LabAssistantControllers/LabAssistantController"); 

router.post("/labAssistant-profile",createLabAssistantController);
router.get("/labAssistant-profile",getAllLabAssistantController);
router.get("/labAssistant-profile/:labAssistantId",getLabAssistantByIdController);
router.put("/labAssistant-profile/:labAssistantId",updateLabAssistantByIdController);
router.delete("/labAssistant-profile/:equipmentId",deleteLabAssistantByIdController);


module.exports = router;