import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import { SessionContext } from './sessionContext';
import useProduct from '../hooks/API_Hooks/useProduct';
import { getAllOrders, getOrderByUserId, saveOrder, updateStatusById } from '../api/orders/orderMethods';
import { getAllOrderProducts, getOrderProductById, getOrderProductByOrderId, saveOrderProduct, updateOrderProduct, deleteOrderProduct } from '../api/orders/orderDetailsMethods';

export const CartContext = createContext();

export function CartProvider ({children}) {
  localStorage.getItem('cart') === null && localStorage.setItem('cart', JSON.stringify([]));

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
  const [allProducts, setAllProducts] = useState([]);
  const { loginRedirect } = useContext(SessionContext);
  const { getProducts } = useProduct();

  useEffect(() => {
    async function fetchData() {
      const p = await getProducts();
      setAllProducts(p);
    }

    fetchData();
  }, []);

  // Cart functions

  function addToCart(item) {
    loginRedirect();
    const index = findProductIndex(item.id)
    if(index >= 0) {
      const newCart = structuredClone(cart);
      newCart[index].quantity++
      setCart(newCart)
      localStorage.setItem('cart', JSON.stringify(newCart))
      return
    }
    item.quantity = 1
    setCart([...cart, item])
    localStorage.setItem('cart', JSON.stringify([...cart, item]))
  }

  function addProductsToCart(products) {
    loginRedirect();
    const index = findProductIndex(products.id)
    if(index < 0) {
      const newCart = [...cart, products];
      setCart(newCart)
      localStorage.setItem('cart', JSON.stringify(newCart))
      return
    } else {
      const newCart = structuredClone(cart).splice(index, 1, products);
      setCart(newCart)
      localStorage.setItem('cart', JSON.stringify(newCart))
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter(item => item.id !== id))
    localStorage.setItem('cart', JSON.stringify(cart.filter(item => item.id !== id)))
  }

  function clearCart() {
    setCart([])
    localStorage.setItem('cart', JSON.stringify([]))
  }

  // Price functions
  
  function priceTotal() {
    let total = 0;
    cart.forEach(product => total += parseFloat(product.price * product.quantity));
    return total;
  }
  
  function shippingCost () {
    return 30;
  }
  
  function finalPrice () {
    return priceTotal() + shippingCost();
  }
  
  // Logic functions

  function findProductIndex(id) {
    return cart.findIndex(item => item.id === id)
  }

  // Order functions

  // const [isLoading, setIsLoading] = useState(false);

  async function getOrderHistory(userId) {
    return await getOrderByUserId(userId);
  }

  async function createNewOrder(order) {
    const orderDetails = {
      orderId: '',
      productId: '',
      quantity: '',
      comment: '',
    }

    const orderStatus = await saveOrder(order);
    if (orderStatus) {
      cart.forEach(async (product) => {
        orderDetails.orderId = orderStatus.id;
        orderDetails.productId = product.id;
        orderDetails.quantity = product.quantity;
        orderDetails.comment = product.description ? JSON.stringify(product.description) : '';
        await createNewOrderProduct(orderDetails);
      });
    }
  }

  async function createNewOrderProduct(orderProduct) {
    return await saveOrderProduct(orderProduct);
  }

  return(
    <CartContext.Provider value={{
      cart,
      allProducts,
      addToCart,
      addProductsToCart,
      removeFromCart,
      clearCart,
      priceTotal,
      shippingCost,
      finalPrice,
      getOrderHistory,
      createNewOrder
    }}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
}