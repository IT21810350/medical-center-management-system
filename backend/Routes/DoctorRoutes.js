const express = require("express");
const router = express.Router();
const {SymptomController, SearchChanneling, PrescriptionController, GetPrescriptionController, GetDoctorProfileController, SaveDoctorAvailableTime} = require("../Controllers/DoctorController");

router.post("/symptoms", SymptomController);
router.post("/search-channeling", SearchChanneling);
router.post("/prescription", PrescriptionController);
router.get("/prescriptions", GetPrescriptionController);

router.get("/getDoctorProfile/:id", GetDoctorProfileController)
router.post("/save-available-times", SaveDoctorAvailableTime)

module.exports = router;