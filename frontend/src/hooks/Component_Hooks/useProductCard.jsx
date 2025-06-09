import { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';

export default function useProductCard() {
  const [editable, setEditable] = useState(true)
  const {cart, addToCart, addProductsToCart, removeFromCart, allProducts:products } = useContext(CartContext);

  function isEditable(id) {
    return true
  }

  function handleEditable(id) {
    if (!isEditable(id)) {
      addProductById(id)
      return
    }
    setEditable(!editable)
  }

  function searchProduct(id) {
    return products.find((product) => product.id === id)
  }

  function addProducts(product) {
    addProductsToCart(product)
  }

  function addProductById(id) {
    const product = products.find((product) => product.id === id)
    addToCart(product)
  }

  function isInCart(id) {
    const product = cart.find((product) => product.id === id)
    return product ? true : false
  }

  function productQuantity(id) {
    const product = cart.find((product) => product.id === id)
    return product ? product.quantity : 0
  }

  function removeProduct(id) {
    removeFromCart(id)
  }

  function setOneClickBuy(bool){
    localStorage.setItem('oneClickBuy', bool)
  }

  return {
    editable,
    setOneClickBuy,
    handleEditable,
    searchProduct,
    addProducts,
    addProductById,
    isInCart,
    productQuantity,
    removeProduct
  };
}