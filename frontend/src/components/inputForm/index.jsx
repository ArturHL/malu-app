import './index.css'
import { useContext, useState } from 'react';
// import useInputForm from '../../hooks/Component_Hooks/InputForm/useInputForm';
import { ErrorContext } from '../../context/errorContext';

import PropTypes from 'prop-types';
import ErrorTicket from '../errorTicket';

const InputForm = ({type, form}) => {
  const [inputType, setInputType] = useState(type)
  const { updateValueInput } = useContext(ErrorContext);

  function inputTypeSwitch() {
    // ok
    if (inputType === 'mail') {
      return  (<>
              <label className='label'>Correo</label>
              <input className='input mail' type='text' placeholder='email@example.com' 
              onChange={(e)=>{updateValueInput(e.target.value, type, form)}}/>
              </>)
    } 
    if (inputType === 'password') {
      return (<>
              <label className='label'>Contraseña</label>
              <input className='input password' type='password' placeholder='********' 
              onChange={(e)=>{updateValueInput(e.target.value, type, form)}}/>
              </>)
    } 
    if (inputType === 'confirmPassword') {
      return (<>
              <label className='label'>Confirmar Contraseña</label>
              <input className='input confirmPassword' type='password' placeholder='********' 
              onChange={(e)=>{updateValueInput(e.target.value, type, form)}}/>
              </>)
    } 
    if (inputType === 'phone') {
      return (<>
              <label className='label'>Telefono</label>
              <input className='input phone' type='text' placeholder='55 1234 5678' 
              onChange={(e)=>{updateValueInput(e.target.value, type, form)}}/>
              </>)
    } 
    if (inputType === 'name') {
      return (<>
              <label className='label'>Nombre</label>
              <input className='input name' type='text' placeholder='Arturo Hernandez' 
              onChange={(e)=>{updateValueInput(e.target.value, type, form)}}/>
              </>)
    } 
    if (inputType === 'range1') {
      return (<>
              <label className='label'>Cuantas personas?</label>
              <input className='input range1' type='text' placeholder='1 - 20'
              onChange={(e)=>{updateValueInput(e.target.value, type, form)}}/>
              </>)
    } 
    if (inputType === 'range30') {
      return (<>
              <label className='label'>Cuantas personas?</label>
              <input className='input range2' type='text' placeholder='30 - 60'
              onChange={(e)=>{updateValueInput(e.target.value, type, form)}}/>
              </>)
    } 
    if (inputType === 'date') {
      return (<>
              <label className='label'>Fecha</label>
              <input className='input date' type='date'
              onChange={(e)=>{updateValueInput(e.target.value, type, form)}}/>
              </>)
    }
    if (inputType === 'code') {
      return (<>
              <label className='label'>Codigo de Regalo</label>
              <input className='input code' type='text' placeholder='Codigo de Regalo'
              onChange={(e)=>{updateValueInput(e.target.value, type, form)}}/>
              </>)
    } 
    if (inputType === 'time') {
      return (<>
              <label className='label'>Horario</label>
              <input className='input time' type='time'
              onChange={(e)=>{updateValueInput(e.target.value, type, form)}}/>
              </>)
    }
    if (inputType === 'image') {
      return (<>
              <label className='label'>Url de la Imagen</label>
              <input className='input url' type='text' placeholder='Url' 
              onChange={(e)=>{updateValueInput(e.target.value, type, form)}}/>
              </>)
    }
    // address
    if (inputType === 'street') {
      return (<>
              <label className='label'>Calle</label>
              <input className='input street' type='text' placeholder='Av. Universidad'
              onChange={(e)=>{updateValueInput(e.target.value, type, form)}}/>
              </>)
    }
    if (inputType === 'numExt') {
      return (<>
              <label className='label'>Numero Ext.</label>
              <input className='input numExt' type='text' placeholder='1555'
              onChange={(e)=>{updateValueInput(e.target.value, type, form)}}/>
              </>)
    }
    if (inputType === 'numInt') {
      return (<>
              <label className='label'>Numero Int.</label>
              <input className='input numInt' type='text' placeholder='A-Z | 202'
              onChange={(e)=>{updateValueInput(e.target.value, type, form)}}/>
              </>)
    }
    if (inputType === 'postalCode') {
      return (<>
              <label className='label'>Codigo Postal</label>
              <input className='input postalCode' type='text' placeholder='12345'
              onChange={(e)=>{updateValueInput(e.target.value, type, form)}}/>
              </>)
    }
    if (inputType === 'city') {
      return (<>
              <label className='label'>Ciudad</label>
              <input className='input city' type='text' placeholder='Ciudad de Mexico'
              onChange={(e)=>{updateValueInput(e.target.value, type, form)}}/>
              </>)
    }
    if (inputType === 'state') {
      return (<>
              <label className='label'>Estado</label>
              <input className='input state' type='text' placeholder='CDMX'
              onChange={(e)=>{updateValueInput(e.target.value, type, form)}}/>
              </>)
    }
    // payment
    if (inputType === 'type') {
      return (<>
              <label className='label'>Tipo</label>
              <input className='input type' type='text' placeholder='Visa / Mastercard / AMEX'
              onChange={(e)=>{updateValueInput(e.target.value, type, form)}}/>
              </>)
    }
    if (inputType === 'cardNumber') {
      return (<>
              <label className='label'>Numero de Tarjeta</label>
              <input className='input cardNumber' type='text' placeholder='**** **** **** 1234'
              onChange={(e)=>{updateValueInput(e.target.value, type, form)}}/>
              </>)
    }
    if (inputType === 'expiration') {
      return (<>
              <label className='label'>Fecha de Expiracion</label>
              <input className='input expiration' type='month' placeholder='MM/AA'
              onChange={(e)=>{updateValueInput(e.target.value, type, form)}}/>
              </>)
    }
    if (inputType === 'cvv') {
      return (<>
              <label className='label'>Codigo de Seguridad</label>
              <input className='input cvv' type='text' placeholder='123'
              onChange={(e)=>{updateValueInput(e.target.value, type, form)}}/>
              </>)
    }
  }

  return (
    <>
      {inputTypeSwitch()}
      <ErrorTicket type={type} form={form}/>
    </>
  );
};

InputForm.propTypes = {
  type: PropTypes.string.isRequired,
}

export default InputForm;
