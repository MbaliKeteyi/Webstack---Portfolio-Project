const Workout = require('../models/Workout');

exports.getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({ user: req.user.id });
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch workouts' });
    }
};

exports.addWorkout = async (req, res) => {
    const { type, duration, date } = req.body;
    try {
        const workout = new Workout({ user: req.user.id, type, duration, date });
        await workout.save();
        res.status(201).json(workout);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add workout' });
    }
};

