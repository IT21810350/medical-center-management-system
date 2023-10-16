const mongoose = require('mongoose');

const invoice = new mongoose.Schema({
    invoiceNumber: String,
    patientName: Number,
    invoiceDate: Date,
    status: String,
}, { 
    timestamps: true 
});

const Invoice = mongoose.model('Invoice',invoice);

module.exports = Invoice;