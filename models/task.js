const mongoose = require("mongoose");

const task_schema = mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true,
        minlength: [3],
    },

    description: {
        type: String,
        required: true,
        default: "",
    },

    status: {
        type: String,
        required: true,
        enum: ["pending", "in-progress", "completed"],
        default: "pending",
    },

    priority: {
        type: String,
        required: true,
        enum: ["low", "medium", "high"],
        default: "medium",
    },

    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    dueDate: {
        type: Date,
        required: true,
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("Task", task_schema);