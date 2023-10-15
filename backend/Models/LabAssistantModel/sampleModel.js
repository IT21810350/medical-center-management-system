const mongoose = require('mongoose');

const sampleSchema = new mongoose.Schema({
    sample_name: {
        type: String,
        required: true, // Sample name is required
    },
    sample_type: {
        type: String,
        required: true, // Sample type is required
    },
    collection_date: {
        type: Date,
        required: true, // Collection date is required
    },
    status: {
        type: String,
        enum: ['pending', 'processing', 'completed'], // Status should be one of these values
    },
    lab_assistant_name: {
        type: String,
        required: true, // Lab assistant name is required
    },
},
{
    timestamps: true,
});

const Sample = mongoose.model('Sample', sampleSchema);

module.exports = Sample;
