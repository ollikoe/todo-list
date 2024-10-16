const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    duedate: { type: Date },
    status: { type: Boolean}
});

module.exports = mongoose.model('Task', TaskSchema);