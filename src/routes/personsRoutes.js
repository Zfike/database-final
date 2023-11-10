// src/routes/personsRoutes.js
const express = require('express');
const personsController = require('../controllers/personsController');

const router = express.Router();

// Define routes for Persons entity
router.get('/persons', personsController.getAllPersons);
router.get('/persons/:id', personsController.getPersonById);
// Add more routes as needed

module.exports = router;