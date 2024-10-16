const express = require('express');
const connectDB = require('./database');  // Import your database connection
const taskRoutes = require('./routes/tasks');  // Import task routes
const userRoutes = require('./routes/users');  // Import user routes

const app = express();

app.use(express.json());  // Middleware to parse JSON request bodies

// Connect to MongoDB
connectDB();

// Use the task and user routes
app.use(taskRoutes);
app.use(userRoutes);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
