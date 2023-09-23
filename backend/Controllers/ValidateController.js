const User = require("../Models/UserModel");
const bcrypt = require("bcryptjs");

// validate email
module.exports.ValidateEmail = async (req, res, next) => {

    try{

        const { email } = req.body;

        const existingEmail = await User.findOne({ email });

        if (existingEmail) {
            return res.json({ message: "Email already exists",success: false });
        }else{
            return res.json({ success: true });
        }

    }catch(error){
        console.log(err);
    }
};

// validate User Name
module.exports.ValidateUsername = async (req, res, next) => {

    try{

        const { username } = req.body;

        const existingUsername = await User.findOne({ username });

        if (existingUsername) {
            return res.json({ message: "User Name already exists",success: false });
        }else{
            return res.json({ success: true });
        }

    }catch(error){
        console.log(err);
    }
};

//Validate Password
module.exports.ValidatePassword = async (req, res, next) => {

    try{

        const { email, password } = req.body;

        const existingEmail = await User.findOne({ email });
        const existingPassword = await bcrypt.compare(password, existingEmail.password);


        if (existingPassword) {
            return res.json({ message: "Password already exists",success: false });
        }else{
            return res.json({ success: true });
        }

    }catch(error){
        console.log(err);
    }
};