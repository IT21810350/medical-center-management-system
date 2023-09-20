const mongoose= require("mongoose")

const supplierDetailsSchema = new mongoose.Schema(
    {
        FirstName:{
            type:String,
            require: [true,"Supplier Firstname is required"],
            unique:true,
        },

        LastName:{
            type:String,
            require: [true,"Supplier lastname is required"],
        },

        Email:{
            type:String,
            require: [true,"Supplier firstname is required"],
        },

        PhoneNumber:{
            type:String,
            require: [true,"Supplier firstname is required"],
        },

        Address:{
            type:String,
            require: [true,"Supplier firstname is required"],
        },

        CompanyName:{
            type:String,
            require: [true,"Supplier firstname is required"],
        },

        NIC:{
            type:String,
            require: [true,"Supplier firstname is required"],
        },

        Bio:{
            type:String,
            require: [true,"Supplier firstname is required"],
        },

    }
)