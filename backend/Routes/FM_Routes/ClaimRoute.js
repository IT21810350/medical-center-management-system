const express = require("express");
const router = express.Router();

const {createClaim,deleteClaimById,getAllClaims,getClaimById,updateClaimById} = require('../../Controllers/ClaimController');

// Create new Claim
router.post('/claims',createClaim);

// Get all Claim
router.get('/claims',getAllClaims);

// Get Claim by id
router.get('/claims/:id',getClaimById);

//  Update Claim by id
router.put('/claims/:id',updateClaimById);

// Delete Claim by id
router.delete('/claims/:id',deleteClaimById);


module.exports = router;