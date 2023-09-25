const express = require("express");
const router = express.Router();
/*const router = express.Router();*/
const { registerSupplier, addSupplierPayment, profileSupplier, inventoryMedicine } = require("../Controllers/SupplierController");
const { createMedicine, getAllMedicines, getMedicineById, updateMedicine, deleteMedicine } = require("../Controllers/SupplierController");

// Route for supplier registration
router.post("/supplierRegistration", registerSupplier);

// Route for supplier payment
router.post("/supplierPayment", addSupplierPayment);

// Route for supplier profile
router.post("/supplierManagerProfile", profileSupplier);

// Route for supplier inventory
// Create a new medicine
router.post("/inventoryMedicine", inventoryMedicine);
// Get all medicines
router.get("/inventoryMedicine", getAllMedicines);
// Get a specific medicine by ID
router.get("/inventoryMedicine/:id", getMedicineById);
// Update a medicine by ID
router.put("/inventoryMedicine/:id", updateMedicine);

// Delete a medicine by ID
router.delete("/inventoryMedicine/:id", deleteMedicine);

module.exports = router;

