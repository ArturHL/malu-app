import './index.css';
import { TbEdit } from "react-icons/tb";

import { useEffect } from 'react';
import EditForm from '../../components/editForm';
import useProfilePage from '../../hooks/Pages_Hooks/useProfilePage';

const ProfilePage = () => {
  const { logout,
    loginRedirect,
    sesion,
    user,
    activeEdit,
    isLoading,
    addresses,
    images,
    setActiveEdit,
    getAddressesByUserId,
    deleteUserAddress,
    activeEditForm,
    getUserImg } = useProfilePage();

  useEffect(() => {getAddressesByUserId(user.id);  getUserImg(user.id)}, [])

  return (
    <>
      {sesion ? (
        <section className='profileSection'>
          <div className="section profile-card">
            <div>
              <img src={images} alt="Profile Picture"/>
              <span onClick={()=>{activeEditForm('image')}}><TbEdit/></span>
              <EditForm type='image' activeEdit={activeEdit} setActiveEdit={setActiveEdit} />
            </div>
            <h2>{user.name} <label className='labelEdit' onClick={()=>{activeEditForm('name')}}>Editar</label></h2>
            <EditForm type='name' activeEdit={activeEdit} setActiveEdit={setActiveEdit} />
          </div>

          <div className="section dataSection">
            <h3>Datos De la Cuenta</h3>
            <p>Telefono: {user.phone} <label className='labelEdit' onClick={()=>{activeEditForm('phone')}}>Editar</label></p>
            <EditForm type='phone' activeEdit={activeEdit} setActiveEdit={setActiveEdit} />
            <p>Correo: {user.email} <label className='labelEdit' onClick={()=>{activeEditForm('mail')}}>Editar</label></p>
            <EditForm type='mail' activeEdit={activeEdit} setActiveEdit={setActiveEdit} />
            <p>Contraseña: ******** <label className='labelEdit' onClick={()=>{activeEditForm('password')}}>Editar</label></p>
            <EditForm type='password' activeEdit={activeEdit} setActiveEdit={setActiveEdit} />
          </div>

          <div className="section">
            <button className='buttonB' onClick={()=>{activeEditForm('orders')}}>Ver Historial de Pedidos</button>
            <EditForm type='orders' activeEdit={activeEdit} setActiveEdit={setActiveEdit}/>
            <button className='buttonA'><a href="/menu">Realizar Nuevo Pedido</a></button>
          </div>

          <div className="section">
            <h3>Direcciones de Envio</h3>
            <div className='delivery-address'>
              {
                isLoading ? <p>Cargando...</p> : addresses.map((address, index) => {
                  return (
                    <div className='address' key={index}>
                      <p>{`${address.street} Int. ${address.number}`}</p> <button className='buttonB' onClick={()=>{deleteUserAddress(address.id)}}>Eliminar</button>
                    </div>
                  )
                })
              }
            </div>
            <button className='buttonA' onClick={(e)=>{e.preventDefault(); activeEditForm('address')}}>Agregar Direccion de Envio</button>
            <EditForm type='address' activeEdit={activeEdit} setActiveEdit={setActiveEdit} />
          </div>

          <div className="section">
            <button className='buttonB'><a href={`https://wa.me/5527473906`} style={{color: 'white'}}>Pedir Ayuda</a></button>
            <button className='buttonA' onClick={logout}>Cerrar Sesión</button>
          </div>
        </section>
      ) : loginRedirect()}
    </>
  );
};

export default ProfilePage;
