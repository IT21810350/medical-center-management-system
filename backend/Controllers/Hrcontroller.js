const EmployeeModel = require( "../Models/EmployeeModel");


module.exports.getEmployees = async (req, res) => {
    try {
        const Employee = await EmployeeModel.find();

        res.json({ message: "All Employee", Employee});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching users' });
    }
};


module.exports.getUsersById = async (req, res) => {
    try {
      const Employee = await EmployeeModel.findById(req.params.id);
  
      res.status(201).json({message: " employee's details" ,Employee});
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching users' });
    }
  };