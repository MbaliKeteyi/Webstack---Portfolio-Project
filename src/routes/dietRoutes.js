const express = require('express');
const router = express.Router();
const { getDiet, addDiet } = require('../controllers/dietController');
const { authenticate } = require('../middleware');

router.get('/', authenticate, getDiet);
router.post('/', authenticate, addDiet);

module.exports = router;

