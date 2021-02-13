const mongoose = require('mongoose');

const toDoListSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    date: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
});

const toDoList = mongoose.model('toDoList', toDoListSchema);
module.exports = toDoList; 