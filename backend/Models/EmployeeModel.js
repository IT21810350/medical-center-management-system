const mongoose =require("mongoose");
const bcrypt = require("bcrypt.js");


const employeeDetailsSchema = new mongoose.Schema(
    {
        nic:{
            type:String,
        },

        epf:{
            type:String,
        }
    }
)
module.exports = mongoose.model("EmployeeDetails",employeeDetailsSchema);
