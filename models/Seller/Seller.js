/**
 * Seller.js
 * MongoDB schema for sellers, including their profile and business information
 */

const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide seller name'],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    email: {
      type: String,
      required: [true, 'Please provide email address'],
      unique: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email',
      ],
    },
    password: {
      type: String,
      required: [true, 'Please provide password'],
      minlength: 6,
      select: false, // Don't return password by default
    },
    phone: {
      type: String,
      required: [true, 'Please provide phone number'],
      match: [/^\d{10}$/, 'Please provide a valid 10-digit phone number'],
    },
    storeName: {
      type: String,
      required: [true, 'Please provide store name'],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    storeDescription: {
      type: String,
      maxlength: 500,
    },
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
    businessLicense: {
      type: String,
      required: [true, 'Please provide business license number'],
    },
    books: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
      },
    ],
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
    totalSales: {
      type: Number,
      default: 0,
    },
    totalRevenue: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected', 'suspended'],
      default: 'pending',
    },
    approvalDate: {
      type: Date,
    },
    rejectionReason: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
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
sellerSchema.index({ email: 1 });
sellerSchema.index({ storeName: 1 });
sellerSchema.index({ status: 1 });

// Hash password before saving (placeholder - implement in auth service)
sellerSchema.pre('save', function (next) {
  // TODO: Implement bcrypt password hashing here
  this.updatedAt = Date.now();
  next();
});

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;
