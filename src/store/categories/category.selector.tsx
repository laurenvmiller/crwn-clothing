import { RootState } from "../store";
import { CategoriesSliceModel } from "./categories.slice";

export const selectCategoriesReducer = (
  state: RootState
): CategoriesSliceModel => state.categories;
