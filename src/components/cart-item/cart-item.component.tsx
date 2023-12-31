import { CartItemModel } from "../../models/cart.model";
import { CartItemContainer, ItemDetails } from "./cart-item.styles";

const CartItem = ({ cartItem }: { cartItem: CartItemModel }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {price}
        </span>
      </ItemDetails>
      <span>{quantity}</span>
    </CartItemContainer>
  );
};

export default CartItem;
