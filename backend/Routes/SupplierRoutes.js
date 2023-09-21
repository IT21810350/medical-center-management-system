const express = require("express");
const router = express.Router();
const SupplierRegistration = require("../Controllers/SupplierController"); // Changed the import

router.post("/supplierRegistration", SupplierRegistration);

module.exports = router;
