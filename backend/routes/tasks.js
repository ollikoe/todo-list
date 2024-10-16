const express = require('express');
const Task = require('../models/tasks');  // Ensure the correct path to the Task model
const router = express.Router();  // Use router instead of app

// Get all tasks (home screen)
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Create a new task (add task)
router.post('/tasks', async (req, res) => {
    const { title, description, duedate, status } = req.body;
    const newTask = new Task({ title, description, duedate, status });

    try {
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (err) {
        res.status(400).json({ message: 'Failed to create task' });
    }
});

// Get a single task by ID (edit task)
router.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Update a task by ID (edit task)
router.put('/tasks/:id', async (req, res) => {
    const { title, description, duedate, status } = req.body;

    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { title, description, duedate, status },
            { new: true }
        );
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ message: 'Failed to update task' });
    }
});

// Delete a task by ID
router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
