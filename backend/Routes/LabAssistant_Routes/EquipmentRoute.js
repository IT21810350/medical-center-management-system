const express = require("express");
const router = express.Router();

// EQUIPMENT
const {
    createEquipmentController,
    getAllEquipmentController,
    getEquipmentByIdController,
    updateEquipmentByIdController,
    deleteEquipmentByIdController
} = require("../../Controllers/LabAssistantControllers/EquipmentController"); 

// Define your API routes for CRUD operations
router.post('/lab-inventory', async (req, res) => {
    try {
      const newItem = await LabInventoryItem.create(req.body);
      res.json(newItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  router.get('/lab-inventory', async (req, res) => {
    try {
      const items = await LabInventoryItem.find();
      res.json(items);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
router.put('/lab-inventory/:id', async (req, res) => {
    try {
      const updatedItem = await LabInventoryItem.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
 router.delete('/lab-inventory/:id', async (req, res) => {
    try {
      await LabInventoryItem.findByIdAndRemove(req.params.id);
      res.json({ message: 'Item deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router;