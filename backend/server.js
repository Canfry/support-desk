const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./midlleware/errorMiddleware');

const PORT = process.env.PORT || 8000;

const app = express();

// Middleware to use req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to  the Support Desk API' });
});

// Routes
app.use('/api/users', require('./routes/userRoutes'));

// Middleware
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
