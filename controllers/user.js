const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  try {

    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status().json({ message: "User already exits" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = User.create ({
      username,
      email,
      password: hashPassword,
    });

    res.status(200).json({ message: "User registered successfully!" });
  } catch (error) {
    next(error);
  }
};

module.exports = register;
