import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CategoryItem, CategoryMap } from "./category.types";

export interface CategoriesSliceModel {
  categories: CategoryItem[];
  isLoading: boolean;
  error: Error | undefined;
  categoriesMap: CategoryMap | undefined;
}

const initialState: CategoriesSliceModel = {
  categories: [],
  isLoading: false,
  error: undefined,
  categoriesMap: undefined,
};

export const categoriesSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    updateCategoriesAction(
      state: CategoriesSliceModel,
      action: PayloadAction<CategoryItem[]>
    ) {
      state.categories = action.payload;
    },
    updateErrorAction(
      state: CategoriesSliceModel,
      action: PayloadAction<Error | undefined>
    ) {
      state.error = action.payload;
    },
    updateLoadingAction(
      state: CategoriesSliceModel,
      action: PayloadAction<boolean>
    ) {
      state.isLoading = action.payload;
    },
    updateCategoriesMapAction(
      state: CategoriesSliceModel,
      action: PayloadAction<CategoryMap | undefined>
    ) {
      state.categoriesMap = action.payload;
    },
  },
});

export const {
  updateCategoriesAction,
  updateErrorAction,
  updateLoadingAction,
  updateCategoriesMapAction,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
