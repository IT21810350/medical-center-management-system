const express = require("express");
const router = express.Router();

// TEST
const {createTests,deleteTestById,getAllTests,getTestById,updateTestById} = require("../../Controllers/TestController"); 

// create Test
router.post("/tests",createTests);

// get all Tests
router.get("/tests",getAllTests);

// get Test by id
router.get("/tests/:id",getTestById);

// update Test by id
router.put("/tests/:id",updateTestById);

// delete Test by id
router.delete("/tests/:id",deleteTestById);

module.exports = router;