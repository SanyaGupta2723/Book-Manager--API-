const Book = require('../models/bookModel');

// In-memory books data store
let books = [
  new Book(1, 'To Kill a Mockingbird', 'Harper Lee'),
  new Book(2, '1984', 'George Orwell'),
  new Book(3, 'The Great Gatsby', 'F. Scott Fitzgerald'),
  new Book(4, 'Neelkanth','Mahadevi Verma'),
  new Book(5, 'Operating System','Sanya Gupta'),
];

/**
 * Get all books
 */
const getAllBooks = (req, res) => {
  res.status(200).json({
    success: true,
    count: books.length,
    data: books
  });
};

/**
 * Get a single book by ID
 */
const getBookById = (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(book => book.id === id);

  if (!book) {
    return res.status(404).json({
      success: false,
      error: `Book with ID ${id} not found`
    });
  }

  res.status(200).json({
    success: true,
    data: book
  });
};

/**
 * Create a new book
 */
const createBook = (req, res) => {
  const { title, author } = req.body;
  
  // Generate a new ID (simple approach for in-memory storage)
  const id = books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;
  
  const newBook = new Book(id, title, author);
  books.push(newBook);

  res.status(201).json({
    success: true,
    message: 'Book created successfully',
    data: newBook
  });
};

/**
 * Update a book by ID
 */
const updateBook = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;
  
  const index = books.findIndex(book => book.id === id);
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      error: `Book with ID ${id} not found`
    });
  }

  books[index] = { ...books[index], title, author };

  res.status(200).json({
    success: true,
    message: 'Book updated successfully',
    data: books[index]
  });
};

/**
 * Delete a book by ID
 */
const deleteBook = (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(book => book.id === id);
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      error: `Book with ID ${id} not found`
    });
  }

  const deletedBook = books[index];
  books = books.filter(book => book.id !== id);

  res.status(200).json({
    success: true,
    message: 'Book deleted successfully',
    data: deletedBook
  });
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
};