/**
 * adminRoutes.js
 * Routes for admin operations and dashboard management
 */

const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getAllSellers,
  approveSeller,
  rejectSeller,
  approveUser,
  getAllBooks,
  approveBook,
  rejectBook,
  getSystemStats,
} = require('../controllers/AdminControllers');
const { verifyToken, verifyAdmin } = require('../middlewares/authMiddleware');

/**
 * Apply authentication middleware to all admin routes
 * Ensures only authenticated admins can access these endpoints
 */
router.use(verifyToken, verifyAdmin);

/**
 * User Management Routes
 */

// Get all users
// GET /api/admin/users
router.get('/users', getAllUsers);

// Approve a user account
// PUT /api/admin/users/:userId/approve
router.put('/users/:userId/approve', approveUser);

/**
 * Seller Management Routes
 */

// Get all sellers
// GET /api/admin/sellers
router.get('/sellers', getAllSellers);

// Approve a seller
// PUT /api/admin/sellers/:sellerId/approve
router.put('/sellers/:sellerId/approve', approveSeller);

// Reject a seller
// PUT /api/admin/sellers/:sellerId/reject
router.put('/sellers/:sellerId/reject', rejectSeller);

/**
 * Book Management Routes
 */

// Get all books (pending approval)
// GET /api/admin/books
router.get('/books', getAllBooks);

// Approve a book listing
// PUT /api/admin/books/:bookId/approve
router.put('/books/:bookId/approve', approveBook);

// Reject a book listing
// PUT /api/admin/books/:bookId/reject
router.put('/books/:bookId/reject', rejectBook);

/**
 * System & Analytics Routes
 */

// Get system statistics
// GET /api/admin/stats
router.get('/stats', getSystemStats);

module.exports = router;
