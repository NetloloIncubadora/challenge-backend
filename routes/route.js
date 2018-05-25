'use strict'

const offerController = require('../controllers/offerController');
const express = require('express');
const router = express.Router();

router.get('/offer/:amounts?/:sort?', offerController.search);

module.exports = router;