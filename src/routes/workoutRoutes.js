const express = require('express');
const router = express.Router();
const { getWorkouts, addWorkout } = require('../controllers/workoutController');
const { authenticate } = require('../middleware');

router.get('/', authenticate, getWorkouts);
router.post('/', authenticate, addWorkout);

module.exports = router;

