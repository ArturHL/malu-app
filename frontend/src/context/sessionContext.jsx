import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useUser from '../hooks/API_Hooks/useUser';

export const SessionContext = createContext();

export function SessionProvider ({children}) {
  const [sesion, setSesion] = useState(JSON.parse(sessionStorage.getItem('sesion')))
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')))
  const {logIn, signUp, updateUser}= useUser()

  // User Actions

  async function login(userEmail, password) {
    const userDB = await logIn(userEmail, password)
    if (userDB !== null) {
      sessionStorage.setItem('sesion', true)
      sessionStorage.setItem('user', JSON.stringify(userDB))
      setSesion(true)
      setUser(userDB)
      return true
    } else {
      window.alert('Usuario o contraseña incorrectos')
      return false
    }
  }

  function logout() {
    sessionStorage.setItem('sesion', false)
    sessionStorage.setItem('user', JSON.stringify({}))
    setSesion(false)
    setUser({})
  }

async function register(name, email, phone, password) {
  const newUser = { name, email, phone, password };
  const userDB = await signUp(newUser);

  if (userDB !== null) {
    sessionStorage.setItem('sesion', true);
    sessionStorage.setItem('user', JSON.stringify(userDB));
    setSesion(true);
    setUser(userDB);
    return true;
  } else {
    window.alert('Error al registrar el usuario');
    return false;
  }
}


  async function updateUserData(id, user) {
    const updatedUser = await updateUser(id, user)
    if (updatedUser) {
      setUser(updatedUser)
      return true
    } else {
      return false
    }
  }

  // App Logic

  function isUserLogged() {
    return {sesion, user}
  }

  function loginRedirect() {
    if(!sesion) {
      window.alert('Debes iniciar sesión para continuar')
      window.location.href = '/web/login'
    }
  }

  useEffect(() => {
    sessionStorage.setItem('sesion', sesion)
    sessionStorage.setItem('user', JSON.stringify(user))
  }, [sesion, user])

  return(
    <SessionContext.Provider value={{
      login,
      logout,
      isUserLogged,
      loginRedirect, 
      register, 
      updateUserData,
    }}>
      {children}
    </SessionContext.Provider>
  )
}

SessionProvider.propTypes = {
  children: PropTypes.node.isRequired
}