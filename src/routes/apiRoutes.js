const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/populateDatabase', apiController.populateDatabase);

module.exports = router;