const express = require("express");
const db_connection = require("./config/db");
const errorHandler = require("./middlewares/errorHandler");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3001

const app = express();

// Global error handling middleware
app.use(errorHandler)

app.listen(PORT, ()=> {
    console.log(`server is listing on port ${PORT}`);
    db_connection();
})