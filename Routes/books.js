const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const booksFilePath = path.join(__dirname, '../data/books.json');

const readBooks = () => {
  try {
    const data = fs.readFileSync(booksFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Unable to read books data:', error);
    return [];
  }
};

router.get('/', (req, res) => {
  const books = readBooks();
  res.json(books);
});

router.get('/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const books = readBooks();
  const book = books.find((item) => item.id === bookId);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  res.json(book);
});

module.exports = router;
