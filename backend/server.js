const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 
require('dotenv').config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const ProfileRoute = require("./Routes/ProfileRoute");
const RegisterEmployee = require("./Routes/EmployeeRoutes");
const PharmacistRoutes = require("./Routes/PharmacistRoutes");;
const HR =require("./Routes/HRroutes");;
const SupplierRegistration = require("./Routes/SupplierRoutes");
const doctorRoutes = require("./Routes/DoctorRoutes");
const Room = require("./Routes/resource-person-routes/room-routes");
const RoomType = require("./Routes/resource-person-routes/roomType-routes");

//========================================
const patientRouter = require("./Routes/Patient_Routes/patient_routes");
const inqRouter = require("./Routes/Patient_Routes/inq-routes");
const getDoctors = require("./Routes/Patient_Routes/getDoctors");
const getChannels = require("./Routes/Patient_Routes/channeling-routes");
//========================================


// Lab Assistant Route start
const equipmentRouter = require("./Routes/LabAssistant_Routes/EquipmentRoute");
const labAssistantRouter = require("./Routes/LabAssistant_Routes/LabAssistantRoute");
const reportRouter = require("./Routes/LabAssistant_Routes/ReportRoute");
const sampleRouter = require("./Routes/LabAssistant_Routes/SampleRoute");
const testRouter = require("./Routes/LabAssistant_Routes/TestRoute");


const validationRoute = require("./Routes/ValidateRoutes");
const SupplierPayment = require('./Models/SupplierManagerModel/SupplierPayment');
const { MONGO_URL, PORT } = process.env;

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

app.use(express.json());
app.use(cookieParser());
app.use("/supplier",SupplierRegistration);

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
});

//const PharmacistRoutes = require ("../routes/PharmacistProfile.js");

//http://Localhost:3000/pharmacist

//app.use("/pharmacist",PharmacistRoutes);

app.use("/", authRoute, ProfileRoute, RegisterEmployee, PharmacistRoutes,HR, doctorRoutes, SupplierRegistration, validationRoute);


//================================
app.use("/patientData",patientRouter);
app.use("/inqData" ,inqRouter);
app.use("/getD",getDoctors);
app.use("/ch",getChannels);
//=================================

app.use("/room", Room);
app.use("/room-type", RoomType);

// lab assistant routes end
app.use("/",sampleRouter,testRouter,reportRouter,labAssistantRouter,equipmentRouter);

//Hansanie
app.use("/pharmacistProfile",PharmacistRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
