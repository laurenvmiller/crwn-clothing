import { useDispatch, useSelector } from "react-redux";
import { CategoryItem, CategoryMap } from "../store/categories/category.types";
import {
  updateCategoriesAction,
  updateErrorAction,
  updateLoadingAction,
  updateCategoriesMapAction,
} from "../store/categories/categories.slice";
import { selectCategoriesReducer } from "../store/categories/category.selector";

export const useCategoriesHooks = () => {
  const dispatch = useDispatch();

  const updateCategories = (input: CategoryItem[]) => {
    dispatch(updateCategoriesAction(input));
  };

  const updateError = (input: Error | undefined) => {
    dispatch(updateErrorAction(input));
  };

  const updateLoading = (input: boolean) => {
    dispatch(updateLoadingAction(input));
  };

  const updateCategoriesMap = (input: CategoryMap) => {
    dispatch(updateCategoriesMapAction(input));
  };

  const categories = useSelector(selectCategoriesReducer);

  return {
    updateCategories,
    updateError,
    updateLoading,
    updateCategoriesMap,
    categories,
  };
};
