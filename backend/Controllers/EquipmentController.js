const Equipment = require('../../backend/Models/LabAssistantModel/equipmentModel');

// EQUIPMENT
// Equipment Controllers for each CRUD function
module.exports.createEquipments = async (req, res, next) => {
 try {
    const {equipment_id,equipment_name,manufacturer,purchase_date,maintainence_schedule,status } =  req.body;
 
    const newEquipment = new Equipment({
        equipment_id,
        equipment_name,
        manufacturer,
        purchase_date,
        maintainence_schedule,
        status
    });

  const savedEquipment = await newEquipment.save();

  res.status(201).json(savedEquipment);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal Server Error' });
}
};

module.exports.getAllEquipments = async (req, res) => {
    try {
        const equipments = await Equipment.find();
        res.json({ message: "All Equipments", equipments });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
};

module.exports.getEquipmentById = async (req, res) => {
    try {
        const equipment = await Equipment.findById(req.params.id);
        res.status(200).json({ message: "Equipment details", equipment });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
};

module.exports.updateEquipmentById = async (req, res) => {
    try {
        const equipmentId = req.params.id;
        const updates = req.body;
        const updatedEquipment = await Equipment.findByIdAndUpdate(
          equipmentId,
          updates,
          { new: true }
        );
    
        if (!updatedEquipment) {
          return res.status(404).json({ message: "Equipment not found" });
        }
    
        res.status(200).json({
          message: "Equipment with ID: " + equipmentId + " has been updated",
          updatedEquipment,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
      }
};

module.exports.deleteEquipmentById = async (req, res) => {
    try {
        const equipmentId = req.params.id;
        const equipment = await Equipment.findById(equipmentId);
    
        if (!equipment) {
          return res.status(404).json({ message: "Equipment not found" });
        }
    
        await Equipment.findByIdAndDelete(equipmentId);
        res.status(200).json({ message: "Sample with ID: " + equipmentId + " has been deleted" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
};