import { useContext } from 'react';
import { CartContext } from '../../../context/cartContext';
import useAnimateOrder from '../../../hooks/Component_Hooks/OrderMenu/useAnimateOrder';

export default function useOrderMenu() {
  const {translate, adjustHeight} = useAnimateOrder(false);
  const {cart, clearCart, priceTotal} = useContext(CartContext);

  return {
    translate,
    adjustHeight,
    cart,
    clearCart,
    priceTotal,
  }
}