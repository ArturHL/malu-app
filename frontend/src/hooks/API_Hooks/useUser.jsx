import { useState } from 'react';
import { getUserByEmail, saveNewUser, updateUserById } from '../../api/userMethods';
import { getAllAddressesByUser, createAddress, deleteAddress} from '../../api/addressMethods';
import { getOrderByUserId, saveOrder, updateStatusById } from '../../api/orders/orderMethods';
import { getReservationsByUserId, saveReservation, updateReservationById } from '../../api/reserveMethods';
import { getImgByUserId, saveNewImage } from '../../api/imagesMethods';
import { login } from '../../api/loginMethods';

export default function useUser() {
  const [userDB, setUserDB] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [addresses, setAddresses] = useState([]);
  const [payments, setPayments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [reserves, setReserves] = useState([]);
  const [images, setImages] = useState('');

  async function logIn(email, password) {
    setIsLoading(true);
    const authToken = await login(email, password);
    if (!authToken) {
      return null
    } else {
      localStorage.setItem("auth", authToken.token)
    }
    const user = await getUserByEmail(email);
    if (!user){
      return null
    } else {
      setUserDB(user);
      return user;
    }
  }

  async function signUp(newUser) {
    setIsLoading(true);
    const user = await saveNewUser(newUser);
    setUserDB(user);
    setIsLoading(false);
    return user; 
  }

  async function updateUser(id, user) {
    setIsLoading(true);
    const updatedUser = await updateUserById(id, user);
    if (updatedUser) {
      setUserDB(updatedUser);
      setIsLoading(false);
      return userDB;
    } else {
      setUserDB(null);
      setIsLoading(false);
      return userDB;
    }
  }

  async function deleteUser(id) {
    // Code to delete a user
  }

  async function getUserImg(id) {
    setIsLoading(true);
    const imgDefault = 'https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png';
    const img = await getImgByUserId(id);
    if (img) {
      setImages(img.url);
      setIsLoading(false);
    } else {
      setImages(imgDefault);
      setIsLoading(false);
    }
  }

  async function createNewImage(image) {
    setIsLoading(true);
    const newImage = await saveNewImage(image);
    setIsLoading(false);
    return newImage;
  }

  // Address methods //

  async function getAddressesByUserId(userId) {
    setIsLoading(true);
    const addresses = await getAllAddressesByUser(userId);
    setAddresses(addresses);
    setIsLoading(false);
  }

  async function createNewAddress(address) {
    setIsLoading(true);
    const newAddress = await createAddress(address);
    setIsLoading(false);
    return newAddress;
  }

  async function deleteUserAddress(id) {
    setIsLoading(true);
    await deleteAddress(id);
    setAddresses(addresses.filter((address) => address.id !== id));
    setIsLoading(false);
  }

  // Order methods //

  async function getOrdersByUserId(userId) {
    setIsLoading(true);
    const orders = await getOrderByUserId(userId);
    setOrders(orders);
    setIsLoading(false);
  }

  async function createOrder(order) {
    // function incomplete
    setIsLoading(true);
    const newOrder = await saveOrder(order);
    setIsLoading(false);
    return newOrder;
  }

  async function cancelOrder(id) {
    setIsLoading(true);
    const order = await updateStatusById(id, 'cancelled');
    setIsLoading(false);
    return order;
  }

  // Reserve Methods //

  async function getReservesByUserId(userId) {
    setIsLoading(true);
    const reserves = await getReservationsByUserId(userId);
    setReserves(reserves);
    setIsLoading(false);
  }

  async function createReserve(reserve) {
    setIsLoading(true);
    const newReserve = await saveReservation(reserve);
    setIsLoading(false);
    return newReserve;
  }

  async function cancelReserve(id) {
    // function incomplete
    setIsLoading(true);
    const reserve = await updateReservationById(id, 'cancelled');
    setIsLoading(false);
    return reserve;
  }
  
  return {
    userDB,
    isLoading,
    addresses,
    payments,
    orders,
    reserves,
    images,
    logIn,
    signUp,
    updateUser,
    deleteUser,
    getUserImg,
    getAddressesByUserId,
    createNewAddress,
    deleteUserAddress,
    getOrdersByUserId,
    createOrder,
    cancelOrder,
    getReservesByUserId,
    createReserve,
    cancelReserve,
    createNewImage
  };
}