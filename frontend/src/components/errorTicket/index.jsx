import './index.css';

import { MdOutlineErrorOutline } from "react-icons/md";
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ErrorContext } from '../../context/errorContext';

const ErrorTicket = ({type, form}) => {
  const { getInfoError } = useContext(ErrorContext);

  const error = getInfoError(type, form);

  return (
    <>
      <p className={`error ${error.invalid ? '' : 'inactive'}`} >
        <MdOutlineErrorOutline />Hay un error: {error.message}
      </p>
    </>
  );
};

ErrorTicket.propTypes = {
  
}

export default ErrorTicket;
