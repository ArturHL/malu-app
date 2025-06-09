import './index.css'
import PropTypes from 'prop-types'
import useProductCard from '../../hooks/Component_Hooks/useProductCard'
import ProductDescription from '../productDescription';
import { FaRegTrashAlt } from "react-icons/fa";

const ProductCard = ({id, name, price, image}) => {
  const {editable, handleEditable, isInCart, removeProduct, productQuantity, setOneClickBuy} = useProductCard()

  return (
    <>
      <div className='productCard'>
        <div className='productInfo'>

          {/* DESCOMENTAR PARA MOSTRAR IMAGENES EN TARJETAS DE PRODUCTOS */}

          {/* <img src={image} alt="" /> */}
          <div className={isInCart(id) ? 'quantity' : 'inactive'}>
            <p>x{productQuantity(id)}</p>
          </div>
          <div>
            <h4>{name}</h4>
            <p>MX${price}</p>
          </div>
        </div>
        <div className={isInCart(id) ? 'productController' : 'inactive'}>
          <button onClick={()=>{removeProduct(id)}}><FaRegTrashAlt /></button>
        </div>
        <button className={isInCart(id) ? 'inactive' : 'buttonB'} onClick={()=>{setOneClickBuy(false); handleEditable(id)}} >Agregar al Carrito</button>
      </div>
      <ProductDescription editable={editable} handleEditable={handleEditable} productId={id} />
    </>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
}

export default ProductCard;
