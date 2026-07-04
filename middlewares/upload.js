/**
 * upload.js
 * Handles file uploads (e.g., book cover images) using Multer
 * Provides configurable storage and validation for different file types
 */

const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

/**
 * Configure storage for file uploads
 * Files are stored with original name and timestamp to avoid conflicts
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Store files in the uploads directory
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    // Create unique filename: originalname-timestamp.extension
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    const name = path.basename(file.originalname, ext);
    cb(null, `${name}-${uniqueSuffix}${ext}`);
  },
});

/**
 * File filter to only accept image files
 * @param {Object} req - Express request object
 * @param {Object} file - Multer file object
 * @param {Function} cb - Callback function
 */
const fileFilter = (req, file, cb) => {
  // Allowed MIME types
  const allowedMimes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        `Invalid file type. Allowed: ${allowedMimes.map((m) => m.split('/')[1]).join(', ')}`
      ),
      false
    );
  }
};

/**
 * Multer upload configuration
 * - Max file size: 5MB
 * - Single file upload
 */
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

/**
 * Middleware to handle single file upload for book cover
 * Usage: router.post('/books', uploadCover.single('coverImage'), addBook)
 */
const uploadCover = upload.single('coverImage');

/**
 * Middleware to handle multiple file uploads
 * Usage: router.post('/books/bulk', uploadMultiple.array('images', 5), uploadBulk)
 */
const uploadMultiple = upload.array('images', 5);

/**
 * Error handling middleware for upload errors
 * @param {Error} error - Multer error
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const uploadErrorHandler = (error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'FILE_TOO_LARGE') {
      return res.status(400).json({
        success: false,
        error: 'File size exceeds 5MB limit.',
      });
    }
    if (error.code === 'LIMIT_FILE_COUNT') {
      return res.status(400).json({
        success: false,
        error: 'Too many files. Maximum 5 files allowed.',
      });
    }
  }

  if (error) {
    return res.status(400).json({
      success: false,
      error: error.message || 'File upload error.',
    });
  }

  next();
};

/**
 * Generate file URL for uploaded files
 * @param {String} filename - Name of the uploaded file
 * @returns {String} Full URL path to the file
 */
const getFileUrl = (filename) => {
  return `/uploads/${filename}`;
};

/**
 * Delete uploaded file
 * @param {String} filename - Name of the file to delete
 */
const deleteFile = (filename) => {
  try {
    const filePath = path.join(uploadsDir, filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error deleting file ${filename}:`, error.message);
    return false;
  }
};

module.exports = {
  uploadCover,
  uploadMultiple,
  uploadErrorHandler,
  getFileUrl,
  deleteFile,
  upload,
};
