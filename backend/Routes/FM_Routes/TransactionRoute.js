const express = require("express");
const router = express.Router();

const {createTransactions,deleteTransactionById,getAllTransactions,getTransactionById,updateTransactionById} = require('../../Controllers/TransactionController');

// Create new Transaction
router.post('/transactions',createTransactions);

// Get all Transaction
router.get('/transactions',getAllTransactions);

// Get Transaction by id
router.get('/transactions/:id',getTransactionById);

//  Update Transaction by id
router.put('/transactions/:id',updateTransactionById);

// Delete Transaction by id
router.delete('/transactions/:id',deleteTransactionById);

module.exports = router;