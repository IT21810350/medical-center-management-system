const Transaction = require("../Models/FinancialManagerModel/TransactionModel");

// TRANSACTION
// Transaction Controllers for each CRUD function
module.exports.createTransactions = async (req, res, next) => {
  try {
    const { date, description, amount, type, departmentID } = req.body;

    const newTransaction = new Transaction({
      date,
      description,
      amount,
      type,
      departmentID,
    });

    const savedTransaction = await newTransaction.save();

    res.status(201).json(savedTransaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json({ message: "All Transactions", transactions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    res.status(200).json({ message: "Transaction details", transaction });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.updateTransactionById = async (req, res) => {
  try {
    const transactionId = req.params.id;
    const updates = req.body;
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      transactionId,
      updates,
      { new: true }
    );

    if (!updatedTransaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json({
      message: "Transaction with ID: " + transactionId + " has been updated",
      updatedTransaction,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.deleteTransactionById = async (req, res) => {
  try {
    const transactionId = req.params.id;
    const transaction = await Transaction.findById(transactionId);

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    await Transaction.findByIdAndDelete(transactionId);
    res
      .status(200)
      .json({ message: "Transaction with ID: " + transactionId + " has been deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
