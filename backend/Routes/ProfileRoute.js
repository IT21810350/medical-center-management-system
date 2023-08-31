const express = require("express");
const router = express.Router();
const {CreateProfile} = require("../Controllers/ProfileController");

router.post("/create-profile", CreateProfile);

module.exports = router;