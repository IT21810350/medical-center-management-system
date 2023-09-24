const Equipment = require("../../Models/LabAssistantModel/lab-equipment");

// EQUIPMENT
// Equipment Controllers for each CRUD function
module.exports.createEquipmentController = async (req, res, next) => {
  try {
    const {
      equipment_id,
      name,
      manufacturer,
      purchase_date,
      maintenance_schedule,
      status,
    } = req.body;

    // Create a new equipment instance with proper date conversion
    const equipment = new Equipment({
      equipment_id,
      name,
      manufacturer,
      purchase_date: new Date(purchase_date),
      maintenance_schedule: new Date(maintenance_schedule),
      status,
    });

    // Save the equipment to the database
    await equipment.save();

    res.status(201).json({ message: 'Equipment created successfully', equipment });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllEquipmentController = async (req, res, next) => {
  try {
    const equipmentList = await Equipment.find();

    res.status(200).json({ equipmentList });
  } catch (error) {
    next(error);
  }
};

module.exports.getEquipmentByIdController = async (req, res, next) => {
  try {
    const { equipmentId } = req.params;

    const equipment = await Equipment.findById(equipmentId);

    if (!equipment) {
      return res.status(404).json({ message: 'Equipment not found' });
    }

    res.status(200).json({ equipment });
  } catch (error) {
    next(error);
  }
};

module.exports.updateEquipmentByIdController = async (req, res, next) => {
  try {
    const { equipmentId } = req.params;

    const {
      equipment_id,
      name,
      manufacturer,
      purchase_date,
      maintenance_schedule,
      status,
    } = req.body;

    // Update equipment with proper date conversion and { new: true }
    const updatedEquipment = await Equipment.findByIdAndUpdate(
      equipmentId,
      {
        equipment_id,
        name,
        manufacturer,
        purchase_date: new Date(purchase_date),
        maintenance_schedule: new Date(maintenance_schedule),
        status,
      },
      { new: true }
    );

    if (!updatedEquipment) {
      return res.status(404).json({ message: 'Equipment not found' });
    }

    res.status(200).json({ message: 'Equipment updated successfully', equipment: updatedEquipment });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteEquipmentByIdController = async (req, res, next) => {
  try {
    const { equipmentId } = req.params;

    const deletedEquipment = await Equipment.findByIdAndDelete(equipmentId);

    if (!deletedEquipment) {
      return res.status(404).json({ message: 'Equipment not found' });
    }

    res.status(200).json({ message: 'Equipment deleted successfully' });
  } catch (error) {
    next(error);
  }
};