const Payment = require("../Models/FinancialManagerModel/PaymentModel");

// PAYMENT
// Payment Controllers for each CRUD function
module.exports.createPayments = async (req, res, next) => {
  try {
    const { invoiceID, paymentDate, amount, paymentMethod } = req.body;

    const newPayment = new Payment({
      invoiceID,
      paymentDate,
      amount,
      paymentMethod,
    });

    const savedPayment = await newPayment.save();

    res.status(201).json(savedPayment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json({ message: "All Payments", payments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    res.status(200).json({ message: "Payment details", payment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.updatePaymentById = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const updates = req.body;
    const updatedPayment = await Payment.findByIdAndUpdate(
      paymentId,
      updates,
      { new: true }
    );

    if (!updatedPayment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    res.status(200).json({
      message: "Payment with ID: " + paymentId + " has been updated",
      updatedPayment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.deletePaymentById = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const payment = await Payment.findById(paymentId);

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    await Payment.findByIdAndDelete(paymentId);
    res
      .status(200)
      .json({ message: "Payment with ID: " + paymentId + " has been deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
