import { useDispatch, useSelector } from "react-redux";
import {
  CartSliceModel,
  setCartItemsAction,
  setIsCartOpenAction,
} from "../store/cart/cart.slice";
import { selectCartReducer } from "../store/cart/cart.selector";
import { CartItem } from "../store/cart/cart.types";

export const useCartHooks = () => {
  const dispatch = useDispatch();

  const setCartItems = (input: CartItem[]) => {
    dispatch(setCartItemsAction(input));
  };

  const setIsCartOpen = (input: boolean) => {
    dispatch(setIsCartOpenAction(input));
  };

  const selectCart: CartSliceModel = useSelector(selectCartReducer);

  const selectIsCartOpen = selectCart.isCartOpen;

  const selectCartCount = selectCart.cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );

  const selectCartTotal = selectCart.cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );

  return {
    setCartItems,
    selectCart,
    selectIsCartOpen,
    selectCartCount,
    selectCartTotal,
    setIsCartOpen,
  };
};
