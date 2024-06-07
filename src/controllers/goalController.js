const Goal = require('../models/Goal');

exports.getGoals = async (req, res) => {
    try {
        const goals = await Goal.find({ user: req.user.id });
        res.json(goals);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch goals' });
    }
};

exports.addGoal = async (req, res) => {
    const { description, targetDate } = req.body;
    try {
        const goal = new Goal({ user: req.user.id, description, targetDate });
        await goal.save();
        res.status(201).json(goal);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add goal' });
    }
};

