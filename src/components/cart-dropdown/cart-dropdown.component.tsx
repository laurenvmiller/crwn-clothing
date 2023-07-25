import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button-component";

import CartItem from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";
import { CartItemModel } from "../../models/cart.model";

const CartDropdown = () => {
  // const cartItems = useSelector(selectCart).cartItems;
  const cartItems: any[] = [];
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length > 0 ? (
          cartItems.map((item: CartItemModel) => (
            <CartItem key={item.id} cartItem={item} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button
        onClick={goToCheckoutHandler}
        buttonType={BUTTON_TYPE_CLASSES.base}
      >
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
function selectCart(state: unknown): unknown {
  throw new Error("Function not implemented.");
}
