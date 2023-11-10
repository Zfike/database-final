const express = require('express');
const bookshelfController = require('../controllers/bookshelfController');

const router = express.Router();

// Define routes for Bookshelf entity
router.get('/bookshelves', bookshelfController.getAllBookshelves);
router.get('/bookshelves/:id', bookshelfController.getBookshelfById);
// Add more routes as needed

module.exports = router;