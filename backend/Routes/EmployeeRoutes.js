const express = require("express");
const router = express.Router();
const {RegisterEmployee} = require("../Controllers/RegisterEmployee");

router.post("/register-employee", RegisterEmployee);


module.exports = router;