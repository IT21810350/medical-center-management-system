const express = require("express");
const router = express.Router();

// EQUIPMENT
const {
    createEquipmentController,
    getAllEquipmentController,
    getEquipmentByIdController,
    updateEquipmentByIdController,
    deleteEquipmentByIdController
} = require("../../Controllers/LabAssistantControllers/EquipmentController"); 

router.post("/lab-inventory",createEquipmentController);
router.get("/lab-inventory",getAllEquipmentController);
router.get("/lab-inventory/:equipmentId",getEquipmentByIdController);
//router.put("/lab-inventory/:equipmentId",updateEquipmentByIdController);
router.delete("/lab-inventory/:equipmentId",deleteEquipmentByIdController);

router.put("/lab-inventory/update/:equipmentId",updateEquipmentByIdController);

module.exports = router;