const supplierRegistrationModel = require("../Models/SupplierManagerModel/SupplierRegistration");

module.exports = async (req, res, next) => {
    try {

        const { ...data } = req.body;

        const registrationData = await supplierRegistrationModel.create({ ...data });

        res
            .status(201)
            .json({ message: "Register data added successfully", success: true, registrationData });

        next();

    } catch (error) {
        console.error(error);
        json({ message: "Register data not added sucessfully" });
    }

}
