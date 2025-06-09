import './index.css'

import { IoIosArrowUp } from "react-icons/io";
import InputForm from '../../components/inputForm';
import useLoginPage from '../../hooks/Pages_Hooks/useLoginPage';
import AppButton from '../../components/appButton';

const Login = () => {
  const { form, setForm, loginUser, registerUser } = useLoginPage();

  return (
    <div className='loginContainer'>
      <img src="Logo 2017.png" alt="" className='logo' />
      <a className='goBack' href='/'><IoIosArrowUp />Volver</a>
      <h2 className='title'>{form === 'login' ? 'Inicia Sesion' : 'Registrate'}</h2>
      <section className='subSection'> 
        {
          form === 'login' ? (
            <form className='formLogin'>
              <InputForm type='mail' form='login'/>
              <InputForm type='password' form='login'/>
              <AppButton text='Iniciar Sesion' onClick={loginUser} className='buttonA' form='login'/>
            </form>
            ) : (
            <form className='formRegister'>
              <div>
              <InputForm type='name' form='register'/>
              <InputForm type='mail' form='register'/>
              <InputForm type='phone' form='register'/>
              <InputForm type='password' form='register'/>
              <InputForm type='confirmPassword' form='register'/>
              </div>
              <AppButton text='Registrarse' onClick={registerUser} className='buttonA' form='register'/>
            </form>
          )
        }
      </section>
      {
        form === 'login' ? (
          <p className='redirection'>¿No tienes una cuenta? Registrate <span onClick={() => setForm('register')}>Aqui</span></p>
        ) : (
          <p className='redirection'>¿Ya tienes una cuenta? <span onClick={() => setForm('login')}>Inicia Sesion</span></p>
        )
      }
    </div>
  );
};

export default Login;
