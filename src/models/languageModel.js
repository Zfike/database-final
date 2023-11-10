// src/models/languageModel.js
const { DataTypes } = require('sequelize');
const database = require('./database');

const Language = database.define('Language', {
  language_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  code: {
    type: DataTypes.STRING(4),
  },
});

async function insertLanguage(language) {
    try {
      await language.create(language);
      console.log('Book inserted successfully');
    } catch (error) {
      console.error('Error inserting book:', error);
      throw error; // Re-throw the error for further handling
    }
}

module.exports = Language;
