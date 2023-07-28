import { useDispatch, useSelector } from "react-redux";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button-component";

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";
import { CategoryItem } from "../../store/categories/category.types";

const ProductCard = ({ product }: { product: CategoryItem }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  // const cartItems = useSelector(selectCart).cartItems;

  const addProductToCart = () => {
    //dispatch(addItemToCart(cartItems, product)
  };

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
