/**
 * Validate book input middleware
 */
const validateBookInput = (req, res, next) => {
  const { title, author } = req.body;
  const errors = [];

  if (!title || title.trim() === '') {
    errors.push('Title is required');
  }

  if (!author || author.trim() === '') {
    errors.push('Author is required');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      error: 'Validation failed',
      details: errors
    });
  }

  next();
};

module.exports = { validateBookInput };