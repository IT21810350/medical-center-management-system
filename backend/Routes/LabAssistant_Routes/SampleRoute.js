const express = require('express');
const router = express.Router();
const {createSamples,deleteSampleById,editSampleById,getSampleById,getSamples}= require('../../Controllers/SampleController');

// Create a sample
router.post('/samples', createSamples );

// Get all samples
router.get('/samples', getSamples);

// Get a specific sample by ID
router.get('/samples/:id', getSampleById);

// Update a sample by ID
router.put('/samples/:id', editSampleById);

// Delete a sample by ID
router.delete('/samples/:id', deleteSampleById);

module.exports = router;
