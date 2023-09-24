const router = require("express").Router();
const {getEmployees,getUsersById, getEmployeesById,deleteEmployeeById} = require("../Controllers/Hrcontroller");

router.get("/employees",getEmployees);
router.get('/employees/:id',getEmployeesById);
router.delete('/employees/:id',deleteEmployeeById);

module.exports = router;