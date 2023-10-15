const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
    sample_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sample',
        required: true
    },
    test_name: {
        type: String,
        required: true,
        trim: true // removes leading/trailing whitespaces
    },
    test_date: {
        type: Date,
        required: true
    },
    lab_assistant_name: {
        type: String,
        required: true,
        trim: true
    },
    result_data: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

const Test = mongoose.model("Test", testSchema);

module.exports = Test;
