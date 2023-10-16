const express = require("express");
const router = express.Router();

const {createInvoice,deleteInvoiceById,getAllInvoices,getInvoiceById,updateInvoiceById} = require('../../Controllers/InvoiceController');

// Create new INvoice
router.post('/invoices',createInvoice);

// Get all INvoice
router.get('/invoices',getAllInvoices);

// Get INvoice by id
router.get('/invoices/:id',getInvoiceById);

//  Update INvoice by id
router.put('/invoices/:id',updateInvoiceById);

// Delete INvoice by id
router.delete('/invoices/:id',deleteInvoiceById);


module.exports = router;