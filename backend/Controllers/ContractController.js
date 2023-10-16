const Contract = require("../Models/FinancialManagerModel/ContractModel");  // Assuming your Contract model file is named ContractModel.js

// CONTRACT
// Contract Controllers for each CRUD function
module.exports.createContract = async (req, res, next) => {
  try {
    const { vendorID, startDate, endDate, terms, status } = req.body;

    const newContract = new Contract({
      vendorID,
      startDate,
      endDate,
      terms,
      status,
    });

    const savedContract = await newContract.save();

    res.status(201).json(savedContract);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports.getAllContracts = async (req, res) => {
  try {
    const contracts = await Contract.find();
    res.json({ message: "All Contracts", contracts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.getContractById = async (req, res) => {
  try {
    const contract = await Contract.findById(req.params.id);
    res.status(200).json({ message: "Contract details", contract });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.updateContractById = async (req, res) => {
  try {
    const contractId = req.params.id;
    const updates = req.body;
    const updatedContract = await Contract.findByIdAndUpdate(
      contractId,
      updates,
      { new: true }
    );

    if (!updatedContract) {
      return res.status(404).json({ message: "Contract not found" });
    }

    res.status(200).json({
      message: "Contract with ID: " + contractId + " has been updated",
      updatedContract,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.deleteContractById = async (req, res) => {
  try {
    const contractId = req.params.id;
    const contract = await Contract.findById(contractId);

    if (!contract) {
      return res.status(404).json({ message: "Contract not found" });
    }

    await Contract.findByIdAndDelete(contractId);
    res.status(200).json({ message: "Contract with ID: " + contractId + " has been deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
