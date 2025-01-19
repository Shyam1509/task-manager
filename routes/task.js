const express = require('express');
const register = require('../controllers/user')

const taskRoutes = express.Router();

taskRoutes.post('/task', register);

module.exports = userRoutes;
