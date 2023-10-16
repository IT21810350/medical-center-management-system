const mongoose = require('mongoose');

const department = new mongoose.Schema({
    department_name : String,    
},{
    timestamps: true,
});

const Department = mongoose.model('Department',department);

module.exports =  Department;