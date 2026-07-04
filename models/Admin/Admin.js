/**
 * Admin.js
 * MongoDB schema for admin details and permissions
 */

const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide admin name'],
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
      match: [/^\d{10}$/, 'Please provide a valid 10-digit phone number'],
    },
    role: {
      type: String,
      enum: ['superadmin', 'moderator', 'support'],
      default: 'moderator',
    },
    permissions: {
      canApproveUsers: {
        type: Boolean,
        default: false,
      },
      canApproveSellers: {
        type: Boolean,
        default: false,
      },
      canApproveBooks: {
        type: Boolean,
        default: false,
      },
      canManageReports: {
        type: Boolean,
        default: false,
      },
      canViewAnalytics: {
        type: Boolean,
        default: false,
      },
      canDeleteContent: {
        type: Boolean,
        default: false,
      },
      canSuspendUsers: {
        type: Boolean,
        default: false,
      },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    lastLogin: {
      type: Date,
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

// Hash password before saving (placeholder - implement in auth service)
adminSchema.pre('save', function (next) {
  // TODO: Implement bcrypt password hashing here
  this.updatedAt = Date.now();
  next();
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
