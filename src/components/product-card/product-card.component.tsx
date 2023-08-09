import { useDispatch, useSelector } from "react-redux";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button-component";

import {
  ProductCartContainer,
  ProductCartContainer2,
  Footer,
  Name,
  Price,
  ProductButton,
  ProductImage,
} from "./product-card.styles";
import { CategoryItem } from "../../store/categories/category.types";
import { useCartHooks } from "../../hooks/cart.hooks";
import { CartItem } from "../../store/cart/cart.types";
import { useState } from "react";

const ProductCard = ({ product }: { product: CategoryItem }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();

  const { setCartItems, selectCart } = useCartHooks();

  const addProductToCart = () => {
    const cart = [...selectCart.cartItems];

    const contains: CartItem = cart.filter((val: CartItem) => {
      return product.id === val.id;
    })[0];

    if (contains) {
      //increment quantity
      const newCartItems: CartItem[] = [...selectCart.cartItems].map(
        (val: CartItem) => {
          if (val.id === product.id) {
            return { ...val, quantity: val.quantity + 1 };
          } else {
            return { ...val };
          }
        }
      );
      setCartItems(newCartItems);
    } else {
      //add to cart
      const itemToAddToCart: CartItem = { ...product, quantity: 1 };
      setCartItems([...selectCart.cartItems, itemToAddToCart]);
    }
  };

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <ProductCartContainer
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <ProductImage src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      {isHovering && (
        <ProductButton onClick={addProductToCart}>Add to cart</ProductButton>
      )}
    </ProductCartContainer>
  );
};

export default ProductCard;
