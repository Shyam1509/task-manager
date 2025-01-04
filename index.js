const express = require("express");
const dotenv = require("dotenv").config();
const db_connection = require("./config/db");
const errorHandler = require("./middlewares/errorHandler");
const userRoutes = require('./routes/user');

const PORT = process.env.PORT || 3001

const app = express();

// Middleware for parsing json
app.use(express.json());

// user routes
app.use('/user', userRoutes);

// Global error handling middleware
app.use(errorHandler)

app.listen(PORT, ()=> {
    console.log(`server is listing on port ${PORT}`);
    db_connection();
})