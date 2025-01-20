const express = require('express');
const {addTask} = require('../controllers/task');
const verifyToken = require('../middlewares/verifyToken');
const authorizeRole = require('../middlewares/authorizeRole');

const taskRoutes = express.Router();

taskRoutes.post('/addTask', verifyToken, authorizeRole('admin', 'manager'), addTask);

module.exports = taskRoutes;
