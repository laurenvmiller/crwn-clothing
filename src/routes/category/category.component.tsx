import { useState, useEffect, Fragment, useCallback } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

import { CategoryContainer, Title } from "./category.styles";
import { ProductModel } from "../../models/product.model";
import {
  CategoryItem,
  CategoryMap,
} from "../../store/categories/category.types";

import { useCategoriesHooks } from "../../hooks/categories.hooks";

const Category = () => {
  const { category } = useParams();
  // const categoriesMap = useSelector(selectCategoriesMap);
  // const isLoading = useSelector(selectCategoriesIsLoading);

  const { updateCategories, updateError, updateLoading, categories } =
    useCategoriesHooks();

  const [products, setProducts] = useState<CategoryItem[]>([]);

  useEffect(() => {
    setProducts(categories.categoriesMap?.[category as string] || []);
  }, [category]);

  //you want this one to improve performance
  //because it only runs when the product changes
  const renderProductsCallback = useCallback(() => {
    return (
      products &&
      products.map((product: CategoryItem) => (
        <ProductCard key={product.id} product={product} />
      ))
    );
  }, [products]);

  //this will give you crap performance because it
  //will run on ever rerender and will give you crap perfomance
  const renderProducts = () => {
    return (
      products &&
      products.map((product: CategoryItem) => (
        <ProductCard key={product.id} product={product} />
      ))
    );
  };

  return (
    <Fragment>
      <Title>{(category as string).toUpperCase()}</Title>
      {categories.isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {renderProductsCallback()}
          {/* {renderProducts()} */}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;

// import { useState, useEffect, Fragment } from 'react';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

// import ProductCard from '../../components/product-card/product-card.component';
// import Spinner from '../../components/spinner/spinner.component';

// import {
//   selectCategoriesMap,
//   selectCategoriesIsLoading,
// } from '../../store/categories/category.selector';

// import { CategoryContainer, Title } from './category.styles';

// type CategoryRouteParams = {
//   category: string;
// };

// const Category = () => {
//   const { category } = useParams<
//     keyof CategoryRouteParams
//   >() as CategoryRouteParams;
//   const categoriesMap = useSelector(selectCategoriesMap);
//   const isLoading = useSelector(selectCategoriesIsLoading);
//   const [products, setProducts] = useState(categoriesMap[category]);

//   useEffect(() => {
//     setProducts(categoriesMap[category]);
//   }, [category, categoriesMap]);

//   return (
//     <Fragment>
//       <Title>{category.toUpperCase()}</Title>
//       {isLoading ? (
//         <Spinner />
//       ) : (
//         <CategoryContainer>
//           {products &&
//             products.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//         </CategoryContainer>
//       )}
//     </Fragment>
//   );
// };

// export default Category;
