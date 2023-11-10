const { DataTypes } = require('sequelize');
const database = require('./database');

const Bookshelf = database.define('Bookshelf', {
  bookshelf_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// async function insertLanguage(language) {
//     try {
//       await language.create(language);
//       console.log('Book inserted successfully');
//     } catch (error) {
//       console.error('Error inserting book:', error);
//       throw error; // Re-throw the error for further handling
//     }
//   }

module.exports = Bookshelf;