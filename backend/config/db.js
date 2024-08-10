// config/db.js
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

// Retrieve MongoDB URI from environment variables
const uri = process.env.DB_URI;

if (!uri) {
  throw new Error('MongoDB URI is not defined in .env file');
}

// Connect to MongoDB
mongoose.connect(uri)
.then(() => console.log("Successfully connected to MongoDB!"))
.catch(err => {
  console.error("MongoDB connection error:", err);
  process.exit(1); // Exit the process if connection fails
});
