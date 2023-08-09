import { Fragment, useCallback } from "react";

import { useCategoriesHooks } from "../../hooks/categories.hooks";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";
import {
  CategoryItem,
  CategoryMap,
} from "../../store/categories/category.types";

const CategoriesPreview = () => {
  // const categoriesMap = useSelector(selectCategoriesMap);

  const { updateCategories, updateLoading, categories } = useCategoriesHooks();

  const renderCategories = useCallback(() => {
    Object.keys(categories.categoriesMap as CategoryMap).map(
      (title: string) => {
        const products: CategoryItem[] = (
          categories.categoriesMap as CategoryMap
        )[title];

        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      }
    );
  }, [categories.categoriesMap]);

  return (
    <Fragment>
      {
        categories.isLoading ? (
          <Spinner />
        ) : categories.categoriesMap ? (
          Object.keys(categories.categoriesMap as CategoryMap).map(
            (title: string) => {
              const products: CategoryItem[] = (
                categories.categoriesMap as CategoryMap
              )[title];

              return (
                <CategoryPreview
                  key={title}
                  title={title}
                  products={products}
                />
              );
            }
          )
        ) : (
          <></>
        )
        // Object.keys(categories.categoriesMap as CategoryMap).map(
        //   (title: string) => {
        //     const products = (categories.categoriesMap as CategoryMap)[title];
        //     console.log(products);
        //     console.log(products);

        //     return (
        //       <></>
        //       // <CategoryPreview key={title} title={title} products={products} />
        //     );
        //   }
        // )
        // Object.entries(categories.categoriesMap as CategoryMap).map((val) => {
        //   return (<CategoryPreview key={title} title={title} products={products} />)
        // })
      }
    </Fragment>
  );
};

export default CategoriesPreview;
