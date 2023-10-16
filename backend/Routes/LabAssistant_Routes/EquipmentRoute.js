const express = require("express");
const router = express.Router();

// EQUIPMENT
const {createEquipments,deleteEquipmentById,getAllEquipments,getEquipmentById,updateEquipmentById} = require("../../Controllers/EquipmentController"); 

// Create New Equipment
router.post("/equipments",createEquipments);

// Get All Equipments
router.get("/equipments",getAllEquipments);

// Get Equipment by Id
router.get("/equipments/:id",getEquipmentById);

// Delete Equipment
router.delete("/equipments/:id",deleteEquipmentById);

// Update Equipment
router.put("/equipments/:id",updateEquipmentById);

module.exports = router;