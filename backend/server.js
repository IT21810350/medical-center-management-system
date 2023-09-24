const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 
require('dotenv').config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const ProfileRoute = require("./Routes/ProfileRoute");
const RegisterEmployee = require("./Routes/EmployeeRoutes");
const PharmacistRoutes = require("./Routes/PharmacistRoutes");

const { MONGO_URL, PORT } = process.env;

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders:["content type", "Authorization"],
    //credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
});

//const PharmacistRoutes = require ("../routes/PharmacistProfile.js");

//http://Localhost:3000/pharmacist

//app.use("/pharmacist",PharmacistRoutes);

app.use("/", authRoute, ProfileRoute, RegisterEmployee, PharmacistRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
