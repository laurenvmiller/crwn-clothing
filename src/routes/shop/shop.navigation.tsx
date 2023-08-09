import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { fetchCategoriesStart } from "../../store/categories/category.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  CategoriesData,
  CategoryItem,
  CategoryMap,
  Category as CategoryType,
} from "../../store/categories/category.types";
import { useCategoriesHooks } from "../../hooks/categories.hooks";

const Shop = () => {
  const dispatch = useDispatch();
  const { updateCategories, updateCategoriesMap, updateLoading } =
    useCategoriesHooks();

  useEffect(() => {
    // dispatch(fetchCategoriesStart());

    const loadData = async () => {
      updateLoading(true);
      try {
        const data: CategoriesData[] = await getCategoriesAndDocuments();
        let categoriesMap: CategoryMap = {};

        const categoryItems: CategoryItem[] = data
          .map((val: CategoriesData) => {
            categoriesMap[val.title] = val.items;
            return val.items;
          })
          .flat();

        updateCategories(categoryItems);
        updateCategoriesMap(categoriesMap);
      } catch (error) {
        console.log(error);
      }
      updateLoading(false);
    };

    loadData();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
