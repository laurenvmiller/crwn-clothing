import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  // const isCartOpen = useSelector(selectCart).isCartOpen;
  // const cartCount = useSelector(selectCart).reduce(
  //   (total: number, cartItem: { quantity: number; }) => total + cartItem.quantity,
  //   0
  // );

  //const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer
    // onClick={toggleIsCartOpen}
    >
      <ShoppingIcon className="shopping-icon" />
      {/* <ItemCount>{cartCount}</ItemCount> */}
    </CartIconContainer>
  );
};

export default CartIcon;
