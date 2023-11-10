// src/app.js
const express = require('express');
const { Sequelize } = require('sequelize')
const apiRoutes = require('./src/routes/apiRoutes.js');
const database = require('./src/models/database'); // Use your existing database.js file
const Book = require('./src/models/bookModel'); // Import your models here
const Format = require('./src/models/formatModel');
const Language = require('./src/models/languageModel');
const Person = require('./src/models/personsModel');
const Bookshelf = require('./src/models/bookshelfModel');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware, configurations, etc.

// Import your models and associate them if needed
const models = {
  Language,
  Book,
  Format,
  Person,
  Bookshelf,
  // Add other models here if needed
};

// Associate models if needed
Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(models));

// Sync the models with the database
database.sync({ alter: true, logging: console.log }) // Use force: true to drop and recreate tables
  .then(() => {
    // Routes
    app.use('/api', apiRoutes);
    app.use('/api', require('./src/routes/personsRoutes'));
    app.use('/api', require('./src/routes/bookshelfRoutes'));

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error syncing models with database:', error);
  });
