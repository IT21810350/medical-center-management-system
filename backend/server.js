const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); //helps connect to mongodb database

require('dotenv').config(); //to use environment variables in .env file

//create express server
const app = express();
const port = process.env.PORT || 5000;

//middleware 
app.use(cors());
app.use(express.json());

//connect to mongodb database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
});

//start server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});