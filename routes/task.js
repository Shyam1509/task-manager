const express = require('express');
const {addTask} = require('../controllers/task');
const verifyToken = require('../middlewares/verifyToken');

const taskRoutes = express.Router();

taskRoutes.post('/addTask', verifyToken, addTask);

module.exports = taskRoutes;
