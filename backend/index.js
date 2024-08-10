// index.js
const express = require('express');
const serverless = require('serverless-http');
const app = express();
require('dotenv').config(); // Load environment variables

// Import database connection
require('./config/db'); // Establish connection to MongoDB

// Middleware
app.use(express.json());

// Import and use routes
app.use('/api/users', require('./handlers/user'));

// Export the app for serverless
module.exports.handler = serverless(app);
