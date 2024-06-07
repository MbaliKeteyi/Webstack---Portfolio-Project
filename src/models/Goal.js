const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoalSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    description: { type: String, required: true },
    targetDate: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Goal', GoalSchema);

