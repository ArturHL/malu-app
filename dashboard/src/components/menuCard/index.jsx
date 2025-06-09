import PropTypes from 'prop-types';
import './index.css';
import useProductCard from '../../hooks/Component_Hooks/useProductCard';
import ProductDescription from '../productDescription';
import { FaRegTrashAlt } from "react-icons/fa";


const MenuCard = ({id, name, description, price, image}) => {
  const {editable, handleEditable, isInCart, removeProduct, setOneClickBuy} = useProductCard()
  // la manera de filtrar productos deberia ser a la hora de hacer
  // fetch para traer solo los productos que tengan available = true
  return (
    <>
      <div className='menuCard'>
        <img src={image} alt={name} />
        <div className='containerUtil'>
          <div className='infoContainer'>
            <h2>{name} <span className='price'>${price}</span></h2>
            <p>
              {description}
            </p>
          </div>
          <div className='callToAction'>
            <button className='buttonA' onClick={()=>{setOneClickBuy(true); handleEditable(id)}}>Compra en 1 Click</button>
            <button style={{fontSize: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '14.5px'}} className={isInCart(id) ? 'buttonB' : 'inactive'} onClick={()=>{removeProduct(id)}}><FaRegTrashAlt /></button>
            <button className={isInCart(id) ? 'inactive' : 'buttonB'} onClick={()=>{setOneClickBuy(false); handleEditable(id)}} >Agregar al Carrito</button>
          </div>
        </div>
      </div>
      <ProductDescription editable={editable} handleEditable={handleEditable} productId={id} />
    </>
  );
};

MenuCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  category: PropTypes.number.isRequired,
};

export default MenuCard;
