import { CartItem } from "./cart.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CartSliceModel {
  isCartOpen: boolean;
  cartItems: CartItem[];
}

const initialState: CartSliceModel = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsCartOpenAction(state: CartSliceModel, action: PayloadAction<boolean>) {
      state.isCartOpen = action.payload;
    },
    setCartItemsAction(
      state: CartSliceModel,
      action: PayloadAction<CartItem[]>
    ) {
      state.cartItems = action.payload;
    },
  },
});

export const { setCartItemsAction, setIsCartOpenAction } = cartSlice.actions;

export default cartSlice.reducer;
