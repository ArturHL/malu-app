import useUser from '../../hooks/API_Hooks/useUser';  
import { useContext, useState } from 'react';
import { SessionContext } from '../../context/sessionContext';

export default function useProfilePage() {
  const { getAddressesByUserId, deleteUserAddress, getPaymentsByUserId, deleteUserPayment, getUserImg, isLoading, addresses, payments, images } = useUser();
  const { logout, isUserLogged, loginRedirect } = useContext(SessionContext);
  const { sesion, user } = isUserLogged();
  const [ activeEdit, setActiveEdit ] = useState('none');

  function activeEditForm(form) {
    setActiveEdit(form);
  }

  return {
    logout,
    isUserLogged,
    loginRedirect,
    sesion,
    user,
    activeEdit,
    isLoading,
    addresses,
    payments,
    images,
    getUserImg,
    setActiveEdit,
    getAddressesByUserId,
    deleteUserAddress,
    getPaymentsByUserId,
    deleteUserPayment,
    activeEditForm 
  }
}