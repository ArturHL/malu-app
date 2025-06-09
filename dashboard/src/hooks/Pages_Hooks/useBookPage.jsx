import useUser from '../../hooks/API_Hooks/useUser';
import { useContext } from 'react';
import { SessionContext } from '../../context/sessionContext';

export default function useBookPage() {

  const { loginRedirect } = useContext(SessionContext);
  const { createReserve } = useUser();

  function reserve(bookingType, e) {
    e.preventDefault();
    loginRedirect();
    const form = e.target.closest('form');
    const date = form.querySelector('.date')?.value;
    const time = form.querySelector('.time')?.value;
    const attendees = form.querySelector(`.${bookingType === 'table' ? 'range1' : 'range2'}`)?.value;

    const dateplusTime = `${date}T${time}:00`;

    const reserva = {
      userId: JSON.parse(sessionStorage.getItem('user')).id,
      date: dateplusTime, 
      attendees,
      bookingType
    };

    createReserve(reserva);
  }

  return {
    reserve
  };
}