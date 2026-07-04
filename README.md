# BookStore Backend API

A comprehensive Node.js/Express backend for an e-commerce bookstore platform with support for multiple user roles (admin, seller, user).

## 🏗️ Project Structure

```
BookStore/Backend/
├── config/
│   └── connect.js              # MongoDB connection configuration
├── controllers/
│   ├── AdminControllers.js      # Admin business logic
│   ├── SellerControllers.js     # Seller business logic
│   └── UsersController.js       # User business logic
├── middlewares/
│   ├── authMiddleware.js        # JWT authentication & authorization
│   └── upload.js                # File upload handling with Multer
├── models/
│   ├── Admin/
│   │   └── Admin.js             # Admin schema
│   ├── Seller/
│   │   └── Seller.js            # Seller schema
│   ├── Users/
│   │   └── User.js              # User schema
│   ├── Book.js                  # Book schema
│   ├── Order.js                 # Order schema
│   ├── Review.js                # Review schema
│   └── Cart.js                  # Shopping cart schema
├── routes/
│   ├── adminRoutes.js           # Admin endpoints
│   ├── sellerRoutes.js          # Seller endpoints
│   └── userRoutes.js            # User endpoints
├── uploads/                     # Uploaded files storage (images, documents)
├── server.js                    # Main application entry point
├── package.json                 # Project dependencies
├── .env.example                 # Environment variables template
└── README.md                    # This file
```

## 🚀 Quick Start

### 1. Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### 2. Installation

```bash
# Clone or navigate to the project directory
cd BookStore/Backend

# Install dependencies
npm install

# Or using yarn
yarn install
```

### 3. Environment Setup

```bash
# Copy the environment template
cp .env.example .env

# Edit .env with your configuration
# Required: MONGODB_URI, JWT_SECRET, PORT
```

### 4. Start the Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

Server will run on `http://localhost:5000` (or your configured PORT)

## 📚 API Endpoints

### Admin Routes (`/api/admin`)
- Requires: `verifyToken` + `verifyAdmin` middleware

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users` | Get all users |
| PUT | `/users/:userId/approve` | Approve user |
| GET | `/sellers` | Get all sellers |
| PUT | `/sellers/:sellerId/approve` | Approve seller |
| PUT | `/sellers/:sellerId/reject` | Reject seller |
| GET | `/books` | Get all books for review |
| PUT | `/books/:bookId/approve` | Approve book |
| PUT | `/books/:bookId/reject` | Reject book |
| GET | `/stats` | System statistics |

### Seller Routes (`/api/seller`)
- Requires: `verifyToken` + `verifySeller` middleware

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/profile` | Get seller profile |
| POST | `/books` | Add new book (with image upload) |
| GET | `/books` | List seller's books |
| PUT | `/books/:bookId` | Update book details |
| PATCH | `/books/:bookId/inventory` | Update inventory |
| DELETE | `/books/:bookId` | Delete book |
| GET | `/orders` | Get seller's orders |
| PATCH | `/orders/:orderId/status` | Update order status |
| GET | `/analytics` | Sales analytics |

### User Routes (`/api/user`)
- Some endpoints require `verifyToken` + `verifyUser` middleware

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/profile` | Get user profile | ✓ |
| PUT | `/profile` | Update profile | ✓ |
| GET | `/books` | Browse all books | ✗ |
| GET | `/books/:bookId` | Get book details | ✗ |
| GET | `/books/:bookId/reviews` | Get book reviews | ✗ |
| GET | `/cart` | Get cart | ✓ |
| POST | `/cart/:bookId` | Add to cart | ✓ |
| DELETE | `/cart/:bookId` | Remove from cart | ✓ |
| POST | `/orders` | Place order | ✓ |
| GET | `/orders` | Get user's orders | ✓ |
| POST | `/books/:bookId/reviews` | Leave review | ✓ |

## 🔒 Authentication

Uses **JWT (JSON Web Tokens)** for authentication:

1. **Generate Token**: Login/Register endpoints (not included in this structure)
2. **Send Token**: Include in `Authorization` header
3. **Format**: `Bearer <token>`

Example:
```bash
curl -H "Authorization: Bearer your_jwt_token" http://localhost:5000/api/user/profile
```

## 📤 File Upload

Uses **Multer** for file uploads:

- **Supported**: JPEG, PNG, GIF, WebP
- **Max Size**: 5MB
- **Location**: `/uploads` directory
- **Access**: `http://localhost:5000/uploads/filename`

## 🗄️ Database Models

### User
- Profile info, authentication, orders, reviews, wishlist
- Supports email verification and password reset

### Seller
- Business details, books, ratings, sales tracking
- Status workflow (pending → approved/rejected)

### Admin
- Role-based access (superadmin, moderator, support)
- Granular permissions system

### Book
- Title, author, ISBN, category, price
- Seller reference, ratings, reviews, status tracking

### Order
- User orders with multiple items from different sellers
- Payment and shipping information
- Status tracking

### Review
- Book ratings and comments
- Helpful/unhelpful counters
- Verified purchase badges

### Cart
- User shopping cart with items
- Subtotal and discount support

## 🛠️ Key Features

- **Multi-role system** (Admin, Seller, User)
- **JWT authentication** with role-based access control
- **File upload handling** with validation
- **MongoDB integration** with Mongoose
- **Error handling** middleware
- **CORS support** for frontend integration
- **Environment configuration** with dotenv
- **Request logging** middleware
- **Comprehensive validation** in schemas

## 📦 Required Dependencies

```json
{
  "express": "^4.18.2",
  "mongoose": "^7.0.0",
  "jsonwebtoken": "^9.0.0",
  "multer": "^1.4.5-lts.1",
  "cors": "^2.8.5",
  "bcryptjs": "^2.4.3",
  "dotenv": "^16.0.3"
}
```

## ⚙️ Configuration

### Environment Variables (.env)

```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/bookstore

# Authentication
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d

# CORS
CORS_ORIGIN=http://localhost:3000
```

## 🧪 Development Tips

1. **Use Postman or Thunder Client** for API testing
2. **Check MongoDB** with MongoDB Compass
3. **Use nodemon** for auto-reload during development
4. **Validate requests** using Joi or express-validator
5. **Add tests** using Jest and Supertest

## 📝 Next Steps

1. **Implement Authentication Routes**
   - Register endpoint
   - Login endpoint
   - Password reset
   - Email verification

2. **Add Validation**
   - Input validation with Joi/express-validator
   - Request sanitization

3. **Enhance Security**
   - Rate limiting
   - Input validation
   - XSS protection
   - SQL injection prevention

4. **Testing**
   - Unit tests
   - Integration tests
   - API tests

5. **Documentation**
   - API documentation (Swagger/OpenAPI)
   - Architecture documentation

## 📄 License

MIT

## 🤝 Contributing

Feel free to contribute improvements to this project!

---

**Last Updated**: 2026-07-01
**Version**: 1.0.0
