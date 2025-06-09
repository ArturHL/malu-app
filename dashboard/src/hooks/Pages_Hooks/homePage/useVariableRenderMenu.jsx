import { useContext, useState } from 'react';

import MenuCard from '../../../components/menuCard/index.jsx';
import { CartContext } from '../../../context/cartContext.jsx';

const useVariableRenderMenu = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const { allProducts:products } = useContext(CartContext);

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
    width == 768 || width == 1024 ? variableRender() : null; 
  });

  function variableRender() {
    if (window.innerWidth <= 767) {
      return (products.slice(0,2).map((product) => { return <MenuCard 
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            category={product.category}
            image={product.image}
          />}))
    }
    if (window.innerWidth > 767 && window.innerWidth <= 1023) {
      return (products.slice(0,4).map((product) => { return <MenuCard 
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            category={product.category}
            image={product.image}
          />}))
    }
    if (window.innerWidth > 1023) {
      return (products.slice(0,6).map((product) => { return <MenuCard 
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            category={product.category}
            image={product.image}
          />}))
    }
  }

  return {variableRender};
};

export default useVariableRenderMenu;
