/**
 * userRoutes.js
 * Routes for user operations including browsing, purchases, and account management
 */

const express = require('express');
const router = express.Router();
const {
  getUserProfile,
  updateUserProfile,
  browseBooks,
  getBookDetails,
  addToCart,
  getCart,
  removeFromCart,
  placeOrder,
  getUserOrders,
  leaveReview,
  getBookReviews,
} = require('../controllers/UsersController');
const { verifyToken, verifyUser } = require('../middlewares/authMiddleware');

/**
 * Profile Management Routes
 * Authentication required for these routes
 */

// Get user profile
// GET /api/user/profile
router.get('/profile', verifyToken, verifyUser, getUserProfile);

// Update user profile
// PUT /api/user/profile
router.put('/profile', verifyToken, verifyUser, updateUserProfile);

/**
 * Book Browsing & Discovery Routes
 * No authentication required
 */

// Browse and search all available books
// GET /api/user/books
// Query params: category, author, minPrice, maxPrice, search, page, limit
router.get('/books', browseBooks);

// Get detailed information about a specific book
// GET /api/user/books/:bookId
router.get('/books/:bookId', getBookDetails);

// Get reviews for a book
// GET /api/user/books/:bookId/reviews
router.get('/books/:bookId/reviews', getBookReviews);

/**
 * Shopping Cart Routes
 * Authentication required
 */

// Get user's cart
// GET /api/user/cart
router.get('/cart', verifyToken, verifyUser, getCart);

// Add book to cart
// POST /api/user/cart/:bookId
router.post('/cart/:bookId', verifyToken, verifyUser, addToCart);

// Remove book from cart
// DELETE /api/user/cart/:bookId
router.delete('/cart/:bookId', verifyToken, verifyUser, removeFromCart);

/**
 * Order Management Routes
 * Authentication required
 */

// Place an order
// POST /api/user/orders
router.post('/orders', verifyToken, verifyUser, placeOrder);

// Get user's orders
// GET /api/user/orders
router.get('/orders', verifyToken, verifyUser, getUserOrders);

/**
 * Review Routes
 * Authentication required
 */

// Leave a review for a book
// POST /api/user/books/:bookId/reviews
router.post('/books/:bookId/reviews', verifyToken, verifyUser, leaveReview);

module.exports = router;
