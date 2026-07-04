/**
 * authMiddleware.js
 * Verifies user, seller, and admin tokens to protect private routes
 * Uses JWT (JSON Web Tokens) for authentication
 */

const jwt = require('jsonwebtoken');

/**
 * Verify JWT token and extract user information
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const verifyToken = (req, res, next) => {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({
        success: false,
        error: 'Access denied. No token provided.',
      });
    }

    // Extract token from "Bearer <token>" format
    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        error: 'Invalid token format. Use: Bearer <token>',
      });
    }

    // Verify token
    const secret = process.env.JWT_SECRET || 'your_jwt_secret_key';
    const decoded = jwt.verify(token, secret);

    // Attach user info to request object
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        error: 'Token has expired. Please login again.',
      });
    }

    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        success: false,
        error: 'Invalid token.',
      });
    }

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

/**
 * Verify that user role is 'user'
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const verifyUser = (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: 'Unauthorized. Please authenticate first.',
      });
    }

    if (req.user.role !== 'user') {
      return res.status(403).json({
        success: false,
        error: 'Forbidden. Only regular users can access this route.',
      });
    }

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

/**
 * Verify that user role is 'seller'
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const verifySeller = (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: 'Unauthorized. Please authenticate first.',
      });
    }

    if (req.user.role !== 'seller') {
      return res.status(403).json({
        success: false,
        error: 'Forbidden. Only sellers can access this route.',
      });
    }

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

/**
 * Verify that user role is 'admin'
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const verifyAdmin = (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: 'Unauthorized. Please authenticate first.',
      });
    }

    if (req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Forbidden. Only admins can access this route.',
      });
    }

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

/**
 * Generate JWT token
 * @param {Object} payload - Data to encode in token (userId, role, etc.)
 * @param {Number} expiresIn - Token expiration time in seconds (default: 7 days)
 * @returns {String} JWT token
 */
const generateToken = (payload, expiresIn = '7d') => {
  const secret = process.env.JWT_SECRET || 'your_jwt_secret_key';
  return jwt.sign(payload, secret, { expiresIn });
};

module.exports = {
  verifyToken,
  verifyUser,
  verifySeller,
  verifyAdmin,
  generateToken,
};
