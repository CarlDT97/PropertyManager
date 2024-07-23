const express = require('express');
const router = express.Router();
const controllerCalculator = require('../controllers/controllerCalculator');

router.get('/properties', controllerCalculator);


module.exports = router;
