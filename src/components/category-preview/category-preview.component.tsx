import {
  Title,
  Preview,
  CategoryPreviewContainer,
} from "./category-preview.styles.jsx";

import ProductCard from "../product-card/product-card.component.js";
import { ProductModel } from "../../models/product.model.js";

const CategoryPreview = ({
  title,
  products,
}: {
  title: string;
  products: ProductModel[];
}) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
