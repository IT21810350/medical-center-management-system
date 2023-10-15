const express = require("express");
const router = express.Router();

const {createContract,deleteContractById,getAllContracts,getContractById,updateContractById} = require('../../Controllers/ContractController');

// Create new Contract
router.post('/contracts',createContract);

// Get all Contract
router.get('/contracts',getAllContracts);

// Get Contract by id
router.get('/contracts/:id',getContractById);

//  Update Contract by id
router.put('/contracts/:id',updateContractById);

// Delete Contract by id
router.delete('/contracts/:id',deleteContractById);


module.exports = router;