import axios from 'axios';

const API_URL = '/api/tickets/';

// Get Ticket Notes
const getNotes = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL + ticketData + '/notes', config);

  return response.data;
};

const noteService = { getNotes };

export default noteService;
