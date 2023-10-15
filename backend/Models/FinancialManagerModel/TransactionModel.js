const mongoose = require('mongoose');

const transaction = new mongoose.Schema({
    date: Date,
    description: String,
    amount: Number,
    type: String,
    status: String,
  
}, { 
    timestamps: true 
});

const Transaction = mongoose.model('Transaction',transaction);

module.exports = Transaction;