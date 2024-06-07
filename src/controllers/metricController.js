const Metric = require('../models/Metric');

exports.getMetrics = async (req, res) => {
    try {
        const metrics = await Metric.find({ user: req.user.id });
        res.json(metrics);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch metrics' });
    }
};

exports.addMetric = async (req, res) => {
    const { weight, bmi, bodyFat, date } = req.body;
    try {
        const metric = new Metric({ user: req.user.id, weight, bmi, bodyFat, date });
        await metric.save();
        res.status(201).json(metric);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add metric' });
    }
};

