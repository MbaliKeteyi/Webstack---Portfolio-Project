const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DietSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    meal: { type: String, required: true },
    calories: { type: Number, required: true },
    date: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Diet', DietSchema);

