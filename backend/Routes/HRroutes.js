const router = require("express").Router();
const {getEmployees,getUsersById} = require("../Controllers/Hrcontroller");

router.get("/employees",getEmployees);
router.get('/employees/:id',getUsersById);

module.exports = router;