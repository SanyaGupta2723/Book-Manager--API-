const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const bookRoutes = require('./routes/bookRoutes');
const { errorHandler } = require('./middleware/errorHandler');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/books', bookRoutes);

// Error handling middleware
app.use(errorHandler);

// 404 Not Found handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;