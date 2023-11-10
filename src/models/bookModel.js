// src/models/bookModel.js
const { DataTypes } = require('sequelize');
const database = require('./database');

const Book = database.define('Book', {
  gutenberg_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Add this line to auto-generate the id
  },
  title: {
    type: DataTypes.STRING,
  },
  copyright: {
    type: DataTypes.TINYINT,
  },
  download_count: {
    type: DataTypes.INTEGER,
  },
});

async function insertBook(book) {
  // Generate a unique identifier if gutenberg_id is not provided
  if (!book.gutenberg_id) {
    book.gutenberg_id = generateUniqueId(); // Implement your unique id generation logic
  }

  try {
    await Book.create(book);
    console.log('Book inserted successfully');
  } catch (error) {
    console.error('Error inserting book:', error);
    throw error; // Re-throw the error for further handling
  }
}

// Additional associations or model configurations can be added here if needed

module.exports = {
  Book,
  insertBook,
};

// Example unique id generation function (you may use a library like `uuid` for this)
function generateUniqueId() {
  return Math.floor(Math.random() * 1000000);
}
