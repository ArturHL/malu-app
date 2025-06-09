import { useState } from 'react';
import { getProductByCategoryId } from '../../api/productMethods';
import { getImgByProductId } from '../../api/imagesMethods';
import { getAllProducts } from '../../api/productMethods';

export default function useProduct() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getProductsByCategoryId() {
    setIsLoading(true);
    try {
      const categoryId = JSON.parse(sessionStorage.getItem('category')).id;
      const response = await getProductByCategoryId(categoryId);
      for (const product of response) {
        const responseImg = await getImgByProductId(product.id);
        product.image = responseImg.url;
      }
      setProduct(response);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  async function getProducts() {
    setIsLoading(true);
    try {
      const response = await getAllProducts();
      setIsLoading(false);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  return {
    product,
    isLoading,
    getProductsByCategoryId,
    getProducts
  };
}