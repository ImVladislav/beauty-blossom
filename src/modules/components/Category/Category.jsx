import React from "react";
import { useSelector } from "react-redux";

import { getProducts } from "../../../redux/products/selectors";

import { ProductListContainer, ProductItem } from "./Category.styled";

const Category = () => {
  const items = useSelector(getProducts);

  return (
    <>
      <ProductListContainer>
        <h2>Category</h2>
        {items.map((item) => (
          <ProductItem key={item.id}>
            <h3>{item.name}</h3>
          </ProductItem>
        ))}
      </ProductListContainer>
    </>
  );
};

export default Category;
