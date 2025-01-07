const mongoose = require("mongoose");

const user_schema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      minlenght: [6],
    },

    role: {
        type: String,
        enum: ['user', 'manager', 'admin'],
        default: 'user',
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', user_schema);