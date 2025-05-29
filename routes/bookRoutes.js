const express = require('express');
const bookController = require('../controllers/bookController');
const { validateBookInput } = require('../middleware/validators');

const router = express.Router();

/**
 * @route   GET /api/books
 * @desc    Get all books
 * @access  Public
 */
router.get('/', bookController.getAllBooks);

/**
 * @route   GET /api/books/:id
 * @desc    Get a book by ID
 * @access  Public
 */
router.get('/:id', bookController.getBookById);

/**
 * @route   POST /api/books
 * @desc    Create a new book
 * @access  Public
 */
router.post('/', validateBookInput, bookController.createBook);

/**
 * @route   PUT /api/books/:id
 * @desc    Update a book by ID
 * @access  Public
 */
router.put('/:id', validateBookInput, bookController.updateBook);

/**
 * @route   DELETE /api/books/:id
 * @desc    Delete a book by ID
 * @access  Public
 */
router.delete('/:id', bookController.deleteBook);

module.exports = router;