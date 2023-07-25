import { useSelector } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item.component.jsx";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles.jsx";
import { CartItemModel } from "../../models/cart.model.js";

const Checkout = () => {
  const cartItems = useSelector(selectCart).cartItems;
  const cartTotal = cartItems.reduce(
    (total: number, cartItem: CartItemModel) =>
      total + cartItem.quantity * cartItem.price,
    0
  );

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((cartItem: CartItemModel) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
