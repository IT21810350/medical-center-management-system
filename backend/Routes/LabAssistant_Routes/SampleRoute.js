const express = require('express');
const router = express.Router();
const {
  createSamples,
  deleteSampleById,
  getSampleById,
  updateSampleById,
  getAllSamples,
} = require('../../Controllers/SampleController');

// Create a sample
router.post('/samples', createSamples);

// Get all samples
router.get('/samples', getAllSamples);

// Get a specific sample by ID
router.get('/samples/:id', getSampleById);

// Update a sample by ID
router.put('/samples/:id', updateSampleById);

// Delete a sample by ID
router.delete('/samples/:id', deleteSampleById);

module.exports = router;

