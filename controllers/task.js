const Task = require("../models/task");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/verifyToken");

const addTask = async (req, res, next) => {
  try {
    const { title, description, status, priority, assignedTo, dueDate} = req.body;

    if (!title || !description || !status || !priority || !assignedTo || !dueDate) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!req.user || !req.user._id) {
        return res.status(400).json({ message: "User is not authenticated" });
      }

      console.log(req.user);
      
    const newTask = await Task.create({
      title,
      description,
      status,
      priority,
      assignedTo,
      dueDate,
      createdBy: req.user._id
    });

    const savedTask = await newTask.save();

    res.status(201).json({ 
        message: "Task created successfully!", 
        task: {
            id: newTask._id,
            title: title,
            description: description,
            status: status,
            priority: priority,
            assignedTo: assignedTo,
            dueDate: dueDate,
            createdBy: newTask.createdBy
        },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {addTask};
