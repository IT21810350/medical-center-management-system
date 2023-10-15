const Invoice = require('../Models/FinancialManagerModel/InvoiceModel');

// INVOICE
// Invoice Controllers for each CRUD function

module.exports.createInvoice = async (req, res, next) => {
    try {
      const { invoiceNumber, patientName, invoiceDate, status } = req.body;
  
      const newInvoice = new Invoice({
        invoiceNumber,
        patientName,
        invoiceDate,
        status,
      });
  
      const savedInvoice = await newInvoice.save();
  
      res.status(201).json(savedInvoice);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports.getAllInvoices = async (req, res) => {
    try {
      const invoices = await Invoice.find();
      res.json({ message: 'All Invoices', invoices });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports.getInvoiceById = async (req, res) => {
    try {
      const invoice = await Invoice.findById(req.params.id);
      res.status(200).json({ message: 'Invoice details', invoice });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports.updateInvoiceById = async (req, res) => {
    try {
      const invoiceId = req.params.id;
      const updates = req.body;
      const updatedInvoice = await Invoice.findByIdAndUpdate(invoiceId, updates, { new: true });
  
      if (!updatedInvoice) {
        return res.status(404).json({ message: 'Invoice not found' });
      }
  
      res.status(200).json({
        message: 'Invoice with ID: ' + invoiceId + ' has been updated',
        updatedInvoice,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  module.exports.deleteInvoiceById = async (req, res) => {
    try {
      const invoiceId = req.params.id;
      const invoice = await Invoice.findById(invoiceId);
  
      if (!invoice) {
        return res.status(404).json({ message: 'Invoice not found' });
      }
  
      await Invoice.findByIdAndDelete(invoiceId);
      res.status(200).json({ message: 'Invoice with ID: ' + invoiceId + ' has been deleted' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  