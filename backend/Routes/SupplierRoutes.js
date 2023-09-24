const express = require("express");
const router = express.Router();
/*const router = express.Router();*/
const { registerSupplier,addSupplierPayment,profileSupplier,inventoryMedicine } = require("../Controllers/SupplierController");


// Route for supplier registration
router.post("/supplierRegistration", registerSupplier);

// Route for supplier payment
 router.post("/supplierPayment", addSupplierPayment);

 // Route for supplier profile
 router.post("/supplierManagerProfile", profileSupplier);

 router.post("/inventoryMedicine", inventoryMedicine);






module.exports = router;

