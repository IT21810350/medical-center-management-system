const express = require("express");
const router = express.Router();
const {SymptomController, SearchChanneling, PrescriptionController, GetPrescriptionController, GetDoctorProfileController} = require("../Controllers/DoctorController");

router.post("/symptoms", SymptomController);
router.post("/search-channeling", SearchChanneling);
router.post("/prescription", PrescriptionController);
router.get("/prescriptions", GetPrescriptionController);

router.get("/getDoctorProfile/:id", GetDoctorProfileController)

module.exports = router;