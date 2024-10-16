const express = require('express');
const User = require('../models/users');  // Ensure correct path to User model
const router = express.Router();

// Login route
router.post('/login', async (req, res) => {
    const { name, password } = req.body;

    try {
        const user = await User.findOne({ name });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        res.json({ message: 'Login successful', userId: user._id });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
