const express = require('express');
const router = express.Router();
const {
  getTickets,
  createTickets,
} = require('../controllers/ticketController');

const { protect } = require('../midlleware/authMiddleware');

router.route('/').get(protect, getTickets).post(protect, createTickets);

module.exports = router;
