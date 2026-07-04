/**
 * server.js
 * Main entry point for the BookStore Backend
 * Initializes Express server, connects to MongoDB, and registers all routes
 */

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');

// Load environment variables from .env file
dotenv.config();

// Import database connection
const connectDB = require('./config/connect');

// Import route files
const adminRoutes = require('./routes/adminRoutes');
const sellerRoutes = require('./routes/sellerRoutes');
const userRoutes = require('./routes/userRoutes');

// Initialize Express application
const app = express();

/**
 * ============================================
 * MIDDLEWARE SETUP
 * ============================================
 */

// Body parser middleware - parse incoming JSON requests
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// CORS middleware - allow cross-origin requests
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

// Static file serving - serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Request logging middleware (optional)
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  next();
});

/**
 * ============================================
 * DATABASE CONNECTION
 * ============================================
 */

/**
 * ============================================
 * API ROUTES
 * ============================================
 */

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'BookStore Backend is running',
    timestamp: new Date().toISOString(),
  });
});

// Admin routes - protected by admin authentication
app.use('/api/admin', adminRoutes);

// Seller routes - protected by seller authentication
app.use('/api/seller', sellerRoutes);

// User routes - mixed authentication (some public, some protected)
app.use('/api/user', userRoutes);

/**
 * ============================================
 * ERROR HANDLING MIDDLEWARE
 * ============================================
 */

// 404 - Not Found middleware
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: `Route not found: ${req.method} ${req.path}`,
  });
});

// Global error handling middleware
app.use((error, req, res, next) => {
  console.error('Error:', error);

  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    error: message,
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
  });
});

/**
 * ============================================
 * SERVER STARTUP
 * ============================================
 */

const startServer = async () => {
  try {
    const dbConnection = await connectDB();

    const PORT = process.env.PORT || 8000;
    const NODE_ENV = process.env.NODE_ENV || 'development';

    app.listen(PORT, () => {
      console.log(`
╔═══════════════════════════════════════════════════════╗
║          🚀 BookStore Backend Server Started          ║
╠═══════════════════════════════════════════════════════╣
║ Server: http://localhost:${PORT}
║ Environment: ${NODE_ENV}
║ MongoDB: ${dbConnection ? 'Connected' : 'Not connected'}
╚═══════════════════════════════════════════════════════╝
      `);

      if (!dbConnection) {
        console.warn(
          '⚠ MongoDB is unavailable. The server is running, but database-dependent routes may not work as expected.'
        );
      }
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
};

if (require.main === module) {
  startServer();
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

module.exports = { app, startServer };
