const mongoose =require("mongoose");
const bcrypt = require("bcrypt.js");


const EmployeeSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:[true,"Employee firstname is required"],
        unique:true,
    },

    lastName:{
        type:String,
        require:[true,"Employee lastname addres is required"],
    },

    email:{
        type:String,
        require:[true,"Employee email is required"],
    },

    nic:{
        type:String,
        require:[true,"Employee Nic is reuired"],
    },

    address:{
        type:String,
        require:[true,"Employee address is required"],
    },

    employeeRole:{
        type:String,
        require:[true,"Employee  role is required"]
    },


    gender:{
        type:String,
        require:[true,"Employee  gender is required"]
    },

    birthday:{
        type:String,
        default: new Date(),
    },

    educationlevel:{
        type:String,
        require:[true,"Employee rducstion level is required"]
    },

    certifications:{
        type:String,
        require:[true,"Employee certification is required"]
    },

    medicallicense:{
        type:String,
        require:[true,"Employee medical licen is requieed"]
    },

    taxinformation:{
        type:String,
        require:[true,"Employee tax  is required"]
    },
    
    bankinformation:{
        type:String,
        require:[true,"Bank information  required"]
    },
    insurancedetails:{
        type:String,
        require:[true,"insurance  are required"]
    }
})
Employee.pre("save",  async function(){
this.password = await bcrypt.hash(this.password,12);
});

module.exports = mongoose.model("employee",EmployeeSchema);