const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');

// @desc   Get user tickets
// @route  GET /api/tickets
// access  Private
const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'get tickets' });
});

// @desc   create New Ticket
// @route  POST /api/ickets
// access  Private
const createTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'create tickets' });
});

module.exports = { getTickets, createTickets };
