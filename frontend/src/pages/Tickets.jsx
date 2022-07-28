import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset, getTickets } from '../features/tickets/ticketSlice';

import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';

const Tickets = () => {
  // Get data that we need from the state
  const { tickets, isLoading, isSuccess } = useSelector(
    (state) => state.tickets
  );

  const dispatch = useDispatch();

  // Reset state when unmout
  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1>Tickets</h1>
    </div>
  );
};
export default Tickets;
