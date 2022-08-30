const express = require('express');
const path = require('path');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./midlleware/errorMiddleware');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 8000;

const app = express();

// COnnect to DB
connectDB();

// Middleware to use req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tickets', require('./routes/ticketRoutes'));

// Serve Frontend
if (process.env.NODE_ENV === 'production') {
  // Set Build folder as stattic
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html')
  );
} else {
  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Support Desk API' });
  });
}

// Middleware
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
