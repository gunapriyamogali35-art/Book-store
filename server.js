const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connect');
const booksRouter = require('./routes/books');
const ordersRouter = require('./routes/orders');

const app = express();
const PORT = process.env.PORT || 8000;

// Initialize local JSON-backed database connection
connectDB().catch(() => {
  process.exit(1);
});

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Register API Routes
app.use('/api/books', booksRouter);
app.use('/api/orders', ordersRouter);

// Root health check endpoint
app.get('/', (req, res) => {
  res.json({ message: "AuraBooks Backend Server is running successfully! 📚🚀" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
