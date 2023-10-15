const express = require("express");
const router = express.Router();

const {createPayments,deletePaymentById,getAllPayments,getPaymentById,updatePaymentById} = require('../../Controllers/PaymentController');

// Create new Paymetns
router.post('/payments',createPayments);

// Get all Paymetns
router.get('/payments',getAllPayments);

// Get Paymetns by id
router.get('/payments/:id',getPaymentById);

//  Update Paymetns by id
router.put('/payments/:id',updatePaymentById);

// Delete Paymetns by id
router.delete('/payments/:id',deletePaymentById);


module.exports = router;