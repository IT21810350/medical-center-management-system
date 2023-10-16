const mongoose = require('mongoose');

const sampleSchema = new mongoose.Schema({
    sample_name: {
        type: String,
    },
    sample_type: {
        type: String,
    },
    collection_date: {
        type: Date,
    },
    status: {
        type: String,
    },
    lab_assistant_name: {
        type: String,
    },
},
{
    timestamps: true,
});

const Sample = mongoose.model('Sample', sampleSchema);

module.exports = Sample;
