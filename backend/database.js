const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/todoapp');
        console.log('Connected MongoDB');
    } catch (error) {
        console.error('There was an error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
