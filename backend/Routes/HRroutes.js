const router = require("express").Router();
const {getEmployees,getUsersById, getEmployeesById,deleteEmployeeById,editEmployeeById} = require("../Controllers/Hrcontroller");

router.get("/employees",getEmployees);
router.get('/employees/:id',getEmployeesById);
router.delete('/employees/:id',deleteEmployeeById);
router.put('/employees/:id', editEmployeeById);

module.exports = router;