const express = require("express");
const router = express.Router();
const {SymptomController} = require("../Controllers/DoctorController");

router.post("/symptoms", SymptomController);

module.exports = router;