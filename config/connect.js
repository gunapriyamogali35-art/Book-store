const mongoose = require('mongoose');

/**
 * MongoDB Database Connection
 * Handles the connection to MongoDB using Mongoose ORM
 * Ensures the backend can store and retrieve data reliably
 */

const connectDB = async () => {
  try {
    // Get MongoDB connection string from environment variables
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bookstore';

    // Connect to MongoDB with Mongoose
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    console.log(`✓ MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`✗ MongoDB Connection Error: ${error.message}`);
    return null;
  }
};

/**
 * Connection event listeners
 */
mongoose.connection.on('disconnected', () => {
  console.warn('⚠ MongoDB Disconnected');
});

mongoose.connection.on('reconnected', () => {
  console.log('✓ MongoDB Reconnected');
});

mongoose.connection.on('error', (error) => {
  console.error(`✗ MongoDB Error: ${error.message}`);
});

module.exports = connectDB;
