const connectDB = async () => {
  try {
    console.log('Local JSON-backed bookstore database initialized successfully.');
    return true;
  } catch (error) {
    console.error('Local JSON backend initialization failed:', error.message);
    throw error;
  }
};

module.exports = connectDB;
