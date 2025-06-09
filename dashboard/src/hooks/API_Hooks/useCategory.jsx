import { useState } from "react";
import Category from "../../models/category";
import { getAllCategories } from "../../api/categoryMethods";
import { getImgByCategoryId } from "../../api/imagesMethods";

export default function useCategory() {
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getAllCategoriesData() {
    setIsLoading(true);
    const categories = await getAllCategories();
    const categoriesWithImages = await Promise.all(categories.map(async category => {
      const image = await getImgByCategoryId(category.id);
      return new Category(category.id, category.name, image.url);
    }));
    setCategory(categoriesWithImages);
    setIsLoading(false);
  }

  return { category, isLoading, getAllCategoriesData };
  
}