const Bookshelf = require('../models/bookshelfModel');

// Controller methods
const getAllBookshelves = async (req, res) => {
  try {
    const bookshelves = await Bookshelf.findAll();
    res.json(bookshelves);
  } catch (error) {
    console.error('Error retrieving bookshelves:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getBookshelfById = async (req, res) => {
  const { id } = req.params;
  try {
    const bookshelf = await Bookshelf.findByPk(id);
    if (bookshelf) {
      res.json(bookshelf);
    } else {
      res.status(404).json({ error: 'Bookshelf not found' });
    }
  } catch (error) {
    console.error('Error retrieving bookshelf by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add more controller methods as needed

module.exports = {
  getAllBookshelves,
  getBookshelfById,
  // Add more methods here
};
