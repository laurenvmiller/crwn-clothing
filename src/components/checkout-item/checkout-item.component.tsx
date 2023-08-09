import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";
import { CartItem } from "../../store/cart/cart.types";
import { useCartHooks } from "../../hooks/cart.hooks";

const CheckoutItem = ({ cartItem }: { cartItem: CartItem }) => {
  const { name, imageUrl, price, quantity, id } = cartItem;

  const { setCartItems, selectCart } = useCartHooks();

  const removeItemClicked = () => {
    const deepCopy = [...selectCart.cartItems];
    const filtered = deepCopy.filter((val: CartItem) => val.id !== id);
    setCartItems(filtered);
  };

  const addItemToCart = () => {
    const array = [...selectCart.cartItems, cartItem];
    setCartItems(array);
  };
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemClicked}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemToCart}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={removeItemClicked}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
