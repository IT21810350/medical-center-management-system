const { ValidateEmail, ValidateUsername, ValidatePassword } = require("../Controllers/ValidateController");
const router = require("express").Router();

router.post("/validate-email", ValidateEmail);
router.post('/validate-username', ValidateUsername);
router.post('/validate-password', ValidatePassword);


module.exports = router;