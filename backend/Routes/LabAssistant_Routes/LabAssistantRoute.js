const express = require("express");
const router = express.Router();

// CRUD FUNCTION CONTROLLERS for each Model <- All CRUD Operations for each type exist here
const {
    createLabAssistantController,
    deleteLabAssistantByIdController,
    getAllLabAssistantController,
    getLabAssistantByIdController,
    updateLabAssistantByIdController
} = require("../../Controllers/LabAssistantController"); 

router.post("/labAssistant-profile",createLabAssistantController);
router.get("/labAssistant-profile",getAllLabAssistantController);
router.get("/labAssistant-profile/:id",getLabAssistantByIdController);
router.put("/labAssistant-profile/:id",updateLabAssistantByIdController);
router.delete("/labAssistant-profile/:id",deleteLabAssistantByIdController);


module.exports = router;