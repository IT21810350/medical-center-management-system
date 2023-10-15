const Claim = require("../Models/FinancialManagerModel/ClaimModel");  // Assuming your Claim model file is named ClaimModel.js

// CLAIM
// Claim Controllers for each CRUD function
module.exports.createClaim = async (req, res, next) => {
  try {
    const { patientID, serviceID, dateOfService, claimAmount, status } = req.body;

    const newClaim = new Claim({
      patientID,
      serviceID,
      dateOfService,
      claimAmount,
      status,
    });

    const savedClaim = await newClaim.save();

    res.status(201).json(savedClaim);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports.getAllClaims = async (req, res) => {
  try {
    const claims = await Claim.find();
    res.json({ message: "All Claims", claims });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.getClaimById = async (req, res) => {
  try {
    const claim = await Claim.findById(req.params.id);
    res.status(200).json({ message: "Claim details", claim });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.updateClaimById = async (req, res) => {
  try {
    const claimId = req.params.id;
    const updates = req.body;
    const updatedClaim = await Claim.findByIdAndUpdate(
      claimId,
      updates,
      { new: true }
    );

    if (!updatedClaim) {
      return res.status(404).json({ message: "Claim not found" });
    }

    res.status(200).json({
      message: "Claim with ID: " + claimId + " has been updated",
      updatedClaim,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.deleteClaimById = async (req, res) => {
  try {
    const claimId = req.params.id;
    const claim = await Claim.findById(claimId);

    if (!claim) {
      return res.status(404).json({ message: "Claim not found" });
    }

    await Claim.findByIdAndDelete(claimId);
    res.status(200).json({ message: "Claim with ID: " + claimId + " has been deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
