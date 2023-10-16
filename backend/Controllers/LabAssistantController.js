const LabAssistant = require("../Models/LabAssistantModel/LabAssistantProfile"); 

// Lab User Profile Controller
module.exports.createLabAssistantController = async (req, res, next) => {
  try {
    const {
      lab_assistant_id,
      firstName,
      lastName,
      gender,
      phoneNumber,
      emailAddress,
      NIC,
    } = req.body;

    // Create a new lab assistant instance
    const labAssistant = new LabAssistant({
      lab_assistant_id,
      firstName,
      lastName,
      gender,
      phoneNumber,
      emailAddress,
      NIC,
    });

    // Save the lab assistant to the database
    await labAssistant.save();

    res.status(201).json({ message: 'Lab Assistant created successfully', labAssistant });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllLabAssistantController = async (req, res, next) => {
  try {
    const labAssistantList = await LabAssistant.find();

    res.status(200).json({ labAssistantList });
  } catch (error) {
    next(error);
  }
};

module.exports.getLabAssistantByIdController = async (req, res, next) => {
  try {
    const { labAssistantId } = req.params;

    const labAssistant = await LabAssistant.findById(labAssistantId);

    if (!labAssistant) {
      return res.status(404).json({ message: 'Lab Assistant not found' });
    }

    res.status(200).json({ labAssistant });
  } catch (error) {
    next(error);
  }
};

module.exports.updateLabAssistantByIdController = async (req, res, next) => {
  try {
    const { labAssistantId } = req.params;

    const {
      lab_assistant_id,
      firstName,
      lastName,
      gender,
      phoneNumber,
      emailAddress,
      NIC,
    } = req.body;

    const updatedLabAssistant = await LabAssistant.findByIdAndUpdate(
      labAssistantId,
      {
        lab_assistant_id,
        firstName,
        lastName,
        gender,
        phoneNumber,
        emailAddress,
        NIC,
      },
      { new: true }
    );

    if (!updatedLabAssistant) {
      return res.status(404).json({ message: 'Lab Assistant not found' });
    }

    res.status(200).json({ message: 'Lab Assistant updated successfully', labAssistant: updatedLabAssistant });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteLabAssistantByIdController = async (req, res, next) => {
  try {
    const { labAssistantId } = req.params;

    const deletedLabAssistant = await LabAssistant.findByIdAndDelete(labAssistantId);

    if (!deletedLabAssistant) {
      return res.status(404).json({ message: 'Lab Assistant not found' });
    }

    res.status(200).json({ message: 'Lab Assistant deleted successfully' });
  } catch (error) {
    next(error);
  }
};
