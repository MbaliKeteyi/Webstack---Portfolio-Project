const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MetricSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    weight: { type: Number, required: true },
    bmi: { type: Number, required: true },
    bodyFat: { type: Number, required: true },
    date: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Metric', MetricSchema);

