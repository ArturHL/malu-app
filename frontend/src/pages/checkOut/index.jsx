import './index.css'

import { IoIosArrowUp } from 'react-icons/io'
import useCheckoutPage from '../../hooks/Pages_Hooks/useCheckoutPage'

const Checkout = () => {
  const { stepActive, handleStepActive, handleMenu } = useCheckoutPage();

  return (
    <div className='checkOut'>
      <a className='goBack' href='/menu'><IoIosArrowUp />Volver al Menu</a>
      <img src="/Logo 2017.png" alt="" className='logo' />
      <section className='timeline'>
        <div onClick={()=>{handleStepActive('cart')}} className='step active'>
          <h2>Carrito</h2>
        </div>
        <div onClick={()=>{handleStepActive('sendTo')}} className={`step ${stepActive === 'sendTo' || stepActive === 'pay' ? 'active' : ''}`}>
          <h2>Envio</h2>
        </div>
        <div onClick={()=>{handleStepActive('pay')}} className={`step ${stepActive === 'pay' ? 'active' : ''} `}>
          <h2>Pago</h2>
        </div>
      </section>
      {handleMenu()}
    </div>
  );
};

export default Checkout;
