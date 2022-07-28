import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { reset, getTicket } from '../features/tickets/ticketSlice';
import { useParams } from 'react-router-dom';

import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { toast } from 'react-toastify';

const Ticket = () => {
  const { ticket, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.tickets
  );

  const params = useParams();
  const dispatch = useDispatch();
  const { ticketId } = useParams();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getTicket(ticketId));
  }, [isError, message, ticketId, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h3>Something went wrong!</h3>;
  }

  return (
    <div className='ticket-page'>
      <header className='ticket-header'>
        <BackButton url='/tickets' />
        <h2>
          Ticket ID: {ticket._id}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
        <h3>
          Date submitted: {new Date(ticket.createdAt).toLocaleString('en-US')}
        </h3>
        <hr />
        <div className='ticket-desc'>
          <h3>Description of the issue</h3>
          <p>{ticket.description}</p>
        </div>
      </header>
    </div>
  );
};
export default Ticket;