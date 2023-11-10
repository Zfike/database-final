// src/controllers/apiController.js
const axios = require('axios');
const bookModel = require('../models/bookModel');
// Uncomment if needed
// const languageModel = require('../models/languageModel');
// const formatModel = require('../models/formatModel');
// const personsModel = require('../models/personsModel');
// const bookshelfModel = require('../models/bookshelfModel');

const apiUrl = 'https://gutendex.com/books';

async function getAllBooks(url, maxPages = 10) {
  let allBooks = [];
  let currentPage = 1;

  // Recursive function to fetch books from all pages
  async function fetchBooks(pageUrl) {
    try {
      const response = await axios.get(pageUrl);
      const { results, next } = response.data;

      // Add books from the current page to the list
      allBooks = allBooks.concat(results);

      // If there is a next page and we haven't reached the maxPages limit, make a recursive call
      if (next && currentPage < maxPages) {
        currentPage++;
        await fetchBooks(next);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }

  // Start fetching books from the initial page
  await fetchBooks(url);

  return allBooks;
}

async function populateDatabase(req, res) {
  try {
    const books = await getAllBooks(apiUrl, 10); // Fetch only 10 pages

    for (const book of books) {
      await bookModel.insertBook(book);
    }

    res.status(200).json({ message: 'Database populated successfully' });
  } catch (error) {
    console.error('Error populating database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  populateDatabase,
  // Other controller functions...
};
