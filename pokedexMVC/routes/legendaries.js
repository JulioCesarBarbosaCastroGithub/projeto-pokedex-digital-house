const express = require('express');
const router = express.Router();
const controller = require('../controller/LegendariesController');

router.get('/pineco', controller.getOneLegendary);

module.exports = router;