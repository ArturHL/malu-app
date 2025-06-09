import './index.css'

import PropTypes from 'prop-types';

import { useContext } from 'react';

import { ErrorContext } from '../../context/errorContext';

function AppButton({text, onClick, className, form}) {

  const { isFormError } = useContext(ErrorContext);

  function click(e) {
    e.preventDefault();
    const isCorrectForm = isFormError(form);
    if (!isCorrectForm){
      onClick()
    }
  }

  return (
    <button className={className} onClick={(e)=>{click(e)}}>{text}</button>
  );
}

AppButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  form: PropTypes.string.isRequired,
}

export default AppButton;