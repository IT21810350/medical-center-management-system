const express = require("express");
const router = express.Router();
const {SymptomController, SearchChanneling, PrescriptionController, GetPrescriptionController, GetDoctorProfileController, SaveDoctorAvailableTime, getAllChannelings, getChannelingsById} = require("../Controllers/DoctorController");

router.post("/symptoms", SymptomController);
router.post("/search-channeling", SearchChanneling);
router.post("/prescription", PrescriptionController);
router.get("/prescriptions", GetPrescriptionController);

router.get("/getDoctorProfile/:id", GetDoctorProfileController);
router.post("/save-available-times", SaveDoctorAvailableTime);
router.get("/get-channelings", getAllChannelings);
router.get("/getChannelingById/:id", getChannelingsById);

module.exports = router;