/**
 * Book.js
 * MongoDB schema for books in the store
 */

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide book title'],
      trim: true,
      minlength: 1,
      maxlength: 200,
    },
    author: {
      type: String,
      required: [true, 'Please provide author name'],
      trim: true,
    },
    isbn: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
    },
    description: {
      type: String,
      maxlength: 2000,
    },
    category: {
      type: String,
      enum: [
        'Fiction',
        'Non-Fiction',
        'Science',
        'History',
        'Technology',
        'Self-Help',
        'Mystery',
        'Romance',
        'Children',
        'Educational',
        'Others',
      ],
      required: true,
    },
    price: {
      type: Number,
      required: [true, 'Please provide book price'],
      min: 0,
    },
    quantity: {
      type: Number,
      required: [true, 'Please provide quantity'],
      default: 0,
      min: 0,
    },
    coverImage: {
      type: String,
      default: null,
    },
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seller',
      required: true,
    },
    rating: {
      average: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
      },
      count: {
        type: Number,
        default: 0,
      },
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
      },
    ],
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
    approvalDate: {
      type: Date,
    },
    rejectionReason: {
      type: String,
    },
    totalSold: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Index for faster searches
bookSchema.index({ title: 'text', author: 'text', description: 'text' });
bookSchema.index({ category: 1 });
bookSchema.index({ sellerId: 1 });
bookSchema.index({ status: 1 });
bookSchema.index({ price: 1 });

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
