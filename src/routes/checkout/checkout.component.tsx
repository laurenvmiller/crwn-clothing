import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";
import { CartItemModel } from "../../models/cart.model";
import PaymentForm from "../../components/payment-form/payment-form.component";
import { useCartHooks } from "../../hooks/cart.hooks";
import { CartItem } from "../../store/cart/cart.types";

const Checkout = () => {
  // const cartTotal = useSelector(selectCartTotal);
  // const cartItems = useSelector(selectCartItems);

  const { selectCartTotal, selectCart } = useCartHooks();

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
      {selectCart.cartItems.map((cartItem: CartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}

      {/* {cartItems.map((cartItem: CartItemModel) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))} */}
      <Total>Total: ${selectCartTotal}</Total>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
