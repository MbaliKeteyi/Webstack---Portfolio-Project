const Diet = require('../models/Diet');

exports.getDiet = async (req, res) => {
    try {
        const diet = await Diet.find({ user: req.user.id });
        res.json(diet);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch diet records' });
    }
};

exports.addDiet = async (req, res) => {
    const { meal, calories, date } = req.body;
    try {
        const diet = new Diet({ user: req.user.id, meal, calories, date });
        await diet.save();
        res.status(201).json(diet);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add diet record' });
    }
};

