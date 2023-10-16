const express = require("express");
const router = express.Router();

const {} = require('../../Controllers/FM_Controllers/');

// Create new Departments
router.post('/departments');

// Get all Departments
router.get('/departments');

// Get Departments by id
router.get('/departments/:id');

//  Update Departments by id
router.put('/departments/:id');

// Delete Departments by id
router.delete('/departments/:id');


module.exports = router;