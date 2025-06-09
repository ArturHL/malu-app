import { FaAngleDown } from "react-icons/fa6";
import { FaMotorcycle } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";

import { CartContext } from "../../context/cartContext";
import useProfilePage from "./useProfilePage";

import { useContext, useState, useEffect } from 'react'

export default function useCheckoutPage() {
  const [stepActive, setStepActive] = useState('cart')
  const [detailsActive, setDetailsActive] = useState(-1)
  const { priceTotal, shippingCost, finalPrice, createNewOrder } = useContext(CartContext)
  const {
    user,
    isLoading,
    addresses,
    payments,
    getAddressesByUserId,
    getPaymentsByUserId,
    deleteUserPayment
  } = useProfilePage();
  
  const [order, setOrder] = useState({
    idUser: user.id,
    date: new Date().toISOString(),
    total: finalPrice(),
    status: 'pendiente',
    addressId: '',
    paymentMethodId: '',
  })
  
  useEffect(() => {getAddressesByUserId(user.id); getPaymentsByUserId(user.id)}, [])

  function handleStepActive(step) {
    setStepActive(step)
  }

  function dropMenuAdress() {
    const menuAdress = document.querySelector('.menuAdress')
    menuAdress.classList.contains('inactive') ? 
      menuAdress.classList.toggle('inactive')
      : setTimeout(() => {menuAdress.classList.toggle('inactive')}, 510)
    setTimeout(() => {document.querySelector('.menuAdress').classList.toggle('dropMenuAdress')}, 1)
    setTimeout(() => {document.querySelector('.menuAdress').classList.toggle('increaseHeight')}, 1)
    menuAdress.classList.contains('overflow') ? menuAdress.classList.toggle('overflow') 
    : setTimeout(() => {document.querySelector('.menuAdress').classList.toggle('overflow')}, 500) 
  }

  function modifyOrder(route, value) {
    const orderMod = {...order}
    orderMod[route] = value
    setOrder(orderMod)
  }

  async function payOrder() {
    // .toISOString() convierte la fecha a un string en formato ISO 8601 esto es para que el backend lo convierta a un timestamp de postgres
    modifyOrder('date', new Date().toISOString())
    await createNewOrder(order)
    handleStepActive('paying')
  }

  function succesfullPaymentPage() {
    setTimeout(() => {document.querySelector('.paying').classList.toggle('inactive')}, 200)
    setTimeout(() => {document.querySelector('.succesfullPayment').classList.toggle('inactive')}, 300)
  }

  function formatModifiers(modifiers) {
    const objects = modifiers;

    if (objects[0] === null) {
      return 
    }
    // Mapea cada objeto a un array de elementos div
    const elements = objects.map(obj => {
        // Crea un array de elementos p para cada propiedad en el objeto
        const properties = Object.entries(obj).map(([key, value]) => {
            // Si el valor es un objeto, recorre sus propiedades
            if (typeof value === 'object' && value !== null) {
                return Object.entries(value).map(([subKey, subValue]) => {
                    let displayValue;
                    if (subValue === true) {
                        displayValue = 'Si';
                    } else if (subValue === false) {
                        displayValue = 'No';
                    } else {
                        displayValue = subValue;
                    }
                    return <li>{`${subKey}: ${displayValue}`}</li>;
                });
            } else {
                let displayValue;
                if (value === true) {
                    displayValue = 'Si';
                } else if (value === false) {
                    displayValue = 'No';
                } else {
                    displayValue = value;
                }
                return <li>{`${key}: ${displayValue}`}</li>;
            }
        });

        // Encierra las propiedades en un div y devuelve el div
        return <ul className="ulModifiers">{properties}</ul>;
    });

    return elements;
  }

  function displayDetails(id) {
    detailsActive === id ? setDetailsActive(-1) : setDetailsActive(id)
  }

  function handleMenu() {
    if (stepActive === 'cart') {
      return (
        <>
          <section className='cartComfirm'>
          <div>
            <div className='cart'>
              <h2>Carrito</h2>
              { localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).map((item, index) => {
                return (
                  <>
                    <div className='cartItem' key={index}>
                      <img src={item.image} alt='product' />
                      <div>
                        <span>{`x${item.quantity}`}</span>
                        <h3>{item.name}</h3>
                        <span onClick={()=>{displayDetails(item.id)}} className={item.description[0] !== null ? '' : 'inactive'}>{detailsActive == item.id ? 'Ocultar' : 'Ver' } Detalles</span>
                      </div>
                      <p>${item.price}</p>
                    </div>
                    <div className={`description${item.id} ${detailsActive == item.id ? '' : 'inactive'}`}>
                      {item.description[0] !== null ? formatModifiers(item.description) : ''} 
                    </div>
                  </>
                )
              }) : <h3>No hay productos en el carrito</h3>}
            </div>
          </div>
        </section>
        <form className='giftCode'>
          <input type="text"  placeholder='Codigo de Descuento'/>
          <button className='buttonB' onClick={(e)=>{e.preventDefault()}}>Aplicar</button>
        </form>
        <section className='totalPrice'>
          <div>
            <h3>Subtotal</h3>
            <h4>{`$ ${priceTotal()}.00`}</h4>
          </div>
          <div>
            <h3>Envio</h3>
            <h4>{`$ ${shippingCost()}.00`}</h4>
          </div>
          <div>
            <h3>Descuento</h3>
            <h4>- $ 0.00</h4>
          </div>
          <div>
            <h2>Total</h2>
            <h3>{`$ ${finalPrice()}`}</h3>
          </div>
        </section>
        <button className='buttonA comfirmarCompra' onClick={()=>{handleStepActive('sendTo')}}>
          Continuar 
        </button>
        </>
      )
    } else if (stepActive === 'sendTo') {
      return (
        <>
          <section className='shipmentsForm'>
            <h2>Selecciona la direccion de envio</h2>
            <div className='adressMenu' onClick={dropMenuAdress}><FaAngleDown /></div>
            <div className='menuAdress inactive'>
              {
                isLoading ? <p>Cargando...</p> : addresses.map((address, index) => {
                  return (
                    <div className='address' key={index}>
                      <p>{`${address.street} Int. ${address.number}`}</p> <button className='buttonB' onClick={()=>{modifyOrder('addressId', address.id)}}>Seleccionar</button>
                    </div>
                  )
                })
              }
              <button className='buttonB' onClick={()=>{location.href = '/profile'}}>Agregar Direccion</button>
            </div>
          </section>
          <FaMotorcycle className='deliveryIcon'/>
          <button className='buttonA comfirmarCompra' onClick={()=>{handleStepActive('pay')}}>
            Continuar 
          </button>
        </>
      )
    } else if (stepActive === 'pay') {
      return (
        <>
          <section className='shipmentsForm'>
            <h2>Selecciona Metodo de Pago</h2>
            <div className='adressMenu' onClick={dropMenuAdress}><FaAngleDown /></div>
            <div className='menuAdress inactive'>
              {
                isLoading ? <p>Cargando...</p> : payments.map((payMethod, index) => {
                  return (
                    <div className="payment-method" key={index}>
                      <img src={payMethod.type == 'visa' ? 'https://cdn.freebiesupply.com/logos/large/2x/visa-5-logo-svg-vector.svg' : 
                                payMethod.type == 'mastercard' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png' : 
                                'https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg'} alt="Credit Card" />
                      <p>**** **** **** {payMethod.number.slice(-4)}</p>
                      <button className='buttonB' onClick={()=>{modifyOrder('paymentMethodId', payMethod.id)}}>Seleccionar</button>
                    </div>
                  )
                })
              }
              <button className='buttonB' onClick={()=>{location.href = '/profile'}}>Agregar Direccion</button>
            </div>
          </section>
          <FaCreditCard className='deliveryIcon'/>
          <button className='buttonA comfirmarCompra' onClick={payOrder}>
            Comprar
          </button>
        </>
      )
    } else if(stepActive === 'paying'){
      succesfullPaymentPage()
      return (
        <>
          <section className='paying inactive'>
            <img src="/Logo 2017.png" alt="" className='logo' />
            <h2>Estamos procesando tu pago...</h2>
          </section>
          <section className='succesfullPayment'>
            <img src="/Logo 2017.png" alt="" className='logo' />
            <div>
              <h2 className='title'>Compra Realizada</h2>
              <p>Gracias por tu compra</p>
            </div>
            <img src="/public/mariachi.png" alt="" />
            <button className='buttonA'>
              <a href="/" onClick={()=>{localStorage.setItem('cart', JSON.stringify([]))}}>Volver a la tienda</a>
            </button>
          </section>
        </>
      )
    }
  }

  return {
    stepActive,
    handleStepActive,
    handleMenu
  }
}