// src/models/formatModel.js
const { DataTypes } = require('sequelize');
const database = require('./database');

const Format = database.define('Format', {
    format_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    mime_type: {
      type: DataTypes.STRING(32),
    },
    url: {
      type: DataTypes.STRING(256),
    },
    book_id: {
      type: DataTypes.INTEGER, // Change this line to match the data type of gutenberg_id in Book model
      references: {
        model: 'Book',
        key: 'gutenberg_id',
      },
    },
  });
  
  // Associate Format with Book
  Format.belongsTo(database.models.Book, { 
    foreignKey: 'book_id',
    targetKey: 'gutenberg_id', 
  });

//   async function insertFormat(format) {
//     try {
//       await format.create(format);
//       console.log('Book inserted successfully');
//     } catch (error) {
//       console.error('Error inserting book:', error);
//       throw error; // Re-throw the error for further handling
//     }
//   }
  
  module.exports = Format;
  