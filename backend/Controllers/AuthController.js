const User = require("../Models/UserModel");
const DoctorProfile = require("../Models/DoctorModels/DoctorProfile")
const EmployeeDetails = require("../Models/EmployeeModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, role, createdAt } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const user = await User.create({ email, password, username, role, createdAt });
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });

    next();

  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ message: 'All fields are required' })
    }

    const user = await User.findOne({ email });
    
    if (!user) {
      return res.json({ message: 'Incorrect password or email' })
    }

    const auth = await bcrypt.compare(password, user.password)

    if (!auth) {
      return res.json({ message: 'Incorrect password or email' })
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(201).json({ message: "User logged in successfully", success: true, user});
    
    next()
  } catch (error) {
    console.error(error);
  }
}; 

module.exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();

    for(const user of users){
      user.profile = await DoctorProfile.findOne({_id: user.profile._id});
      user.profile.employeeDetails = await EmployeeDetails.findOne({_id: user.profile.employeeDetails._id});
    }

    res.json({message: "All Users" , users});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching users' });
  }
};

module.exports.getUsersById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    user.profile = await DoctorProfile.findOne({_id: user.profile._id});
    user.profile.employeeDetails = await EmployeeDetails.findOne({ _id: user.profile.employeeDetails._id });

    res.status(201).json({message: user.username + " 's details" ,user});
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching users' });
  }
};