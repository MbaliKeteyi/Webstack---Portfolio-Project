const express = require('express');
const router = express.Router();
const { getMetrics, addMetric } = require('../controllers/metricController');
const { authenticate } = require('../middleware');

router.get('/', authenticate, getMetrics);
router.post('/', authenticate, addMetric);

module.exports = router;

