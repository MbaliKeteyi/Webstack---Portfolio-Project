const express = require('express');
const router = express.Router();
const { getGoals, addGoal } = require('../controllers/goalController');
const { authenticate } = require('../middleware');

router.get('/', authenticate, getGoals);
router.post('/', authenticate, addGoal);

module.exports = router;

