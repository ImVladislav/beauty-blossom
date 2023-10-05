import React from "react";
import { ProductListContainer, ProductItem } from "./ProductList.styled";

const ProductList = ({ products }) => {
  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductItem key={product.ID}>
          <h3>{product.name}</h3>
          <p>{product.Description}</p>
        </ProductItem>
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
