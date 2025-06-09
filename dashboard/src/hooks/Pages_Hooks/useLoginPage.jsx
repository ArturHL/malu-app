import { useState } from 'react';
import { useContext } from 'react';
import { SessionContext } from '../../context/sessionContext';

export default function useLoginPage() {
  const [form, setForm] = useState('login')

  const { login, register } = useContext(SessionContext);

  async function loginUser() {
    document.querySelector(".formLogin").addEventListener("submit", function(event) {
    event.preventDefault()});

    const mail = document.querySelector('.mail')
    const password = document.querySelector('.password')

    const redirection = await login(mail.value, password.value)
    redirection ? location.href = '/web/profile' : console.log(redirection)
  }

  async function registerUser() {
    document.querySelector(".formRegister").addEventListener("submit", function(event) {
    event.preventDefault()});

    const name = document.querySelector('.name')
    const mail = document.querySelector('.mail')
    const phone = document.querySelector('.phone')
    const password = document.querySelector('.password')
    
    const redirection = await register(name.value, mail.value, phone.value, password.value)
    redirection ? location.href = '/web/profile' : console.log('error')
  }

  return {
    form,
    setForm,
    loginUser,
    registerUser
  }
}