const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },  // Storing plain text for now
});

module.exports = mongoose.model('User', UsersSchema);