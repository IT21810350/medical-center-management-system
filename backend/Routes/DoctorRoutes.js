const express = require("express");
const router = express.Router();
const {SymptomController, SearchChanneling, PrescriptionController} = require("../Controllers/DoctorController");

router.post("/symptoms", SymptomController);
router.post("/search-channeling", SearchChanneling);
router.post("/prescription", PrescriptionController);

module.exports = router;