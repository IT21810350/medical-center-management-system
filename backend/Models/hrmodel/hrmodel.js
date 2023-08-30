const mongoose =require("mongoose");
const bcrypt = require("bcrypt.js");


const Employee = new mongoose.Schema({
    email:{
        type:String,
        require:[true,"Employee email addres is required"],
        unique:true,
    },

    firstName:{
        type:String,
        require:[true,"Employee firstname addres is required"],
    },

    lastName:{
        type:String,
        require:[true,"Employee last name is required"],
    },

    password:{
        type:String,
        require:[true,"Employee password is reuired"],
    },

    Nic:{
        type:String,
        require:[true,"Employee nic is required"],
    },

    role:{
        type:String,
        require:[true,"Employee 's  role is required"]
    },


    hireDate:{
        type:String,
         default: new Date(),
    },

    PhoneNumber:{
     type:String,
     require:[true,"Employee phone number is required"]
    },

    Salaray:{
        type:String,
        require:[true,"Employee salaray is required"]
    },

    Gender:{
        type:String,
        require:[true,"Employee gender is required"]
    },

    Dathofbirth:{
        type:String,
        require:[true,"Employee birthday is requieed"]
    },

    address:{
        type:String,
        require:[true,"Employee address is required"]
    },
    
    Skills_and_Qualifications:{
        type:String,
        require:[true,"Skills are required"]
    },
    Regular_Working_HoursZ:{
        type:String,
        require:[true,"Workin hours are required"]
    }
    




})