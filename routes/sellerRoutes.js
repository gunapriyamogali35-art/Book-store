/**
 * sellerRoutes.js
 * Routes for seller operations and inventory management
 */

const express = require('express');
const router = express.Router();
const {
  getSellerProfile,
  addBook,
  getSellerBooks,
  updateBook,
  updateInventory,
  getSellerOrders,
  updateOrderStatus,
  getSalesAnalytics,
  deleteBook,
} = require('../controllers/SellerControllers');
const { verifyToken, verifySeller } = require('../middlewares/authMiddleware');
const { uploadCover, uploadErrorHandler } = require('../middlewares/upload');

/**
 * Apply authentication middleware to all seller routes
 * Ensures only authenticated sellers can access these endpoints
 */
router.use(verifyToken, verifySeller);

/**
 * Profile Management Routes
 */

// Get seller profile
// GET /api/seller/profile
router.get('/profile', getSellerProfile);

/**
 * Book Management Routes
 */

// Add a new book (with cover image upload)
// POST /api/seller/books
router.post('/books', uploadCover, uploadErrorHandler, addBook);

// Get all books by seller
// GET /api/seller/books
router.get('/books', getSellerBooks);

// Update book details
// PUT /api/seller/books/:bookId
router.put('/books/:bookId', updateBook);

// Update book inventory/quantity
// PATCH /api/seller/books/:bookId/inventory
router.patch('/books/:bookId/inventory', updateInventory);

// Delete a book listing
// DELETE /api/seller/books/:bookId
router.delete('/books/:bookId', deleteBook);

/**
 * Order Management Routes
 */

// Get all orders for seller's books
// GET /api/seller/orders
router.get('/orders', getSellerOrders);

// Update order status
// PATCH /api/seller/orders/:orderId/status
router.patch('/orders/:orderId/status', updateOrderStatus);

/**
 * Analytics & Sales Routes
 */

// Get sales analytics
// GET /api/seller/analytics
router.get('/analytics', getSalesAnalytics);

module.exports = router;
