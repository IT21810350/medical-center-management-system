const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 
require('dotenv').config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const { MONGO_URL, PORT } = process.env;

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);