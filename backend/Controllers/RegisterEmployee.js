const EmployeeDetails =require("../Models/EmployeeModel");
const UserModel = require("../Models/UserModel");

module.exports.RegisterEmployee =async (req,res,next)=>{
    try{
        const {userId,nic,epf}=req.body;
        const employee = await EmployeeDetails.create({nic,epf});

        const user =await UserModel.findById(userId).populate()
     

    }
    catch{

    }
}