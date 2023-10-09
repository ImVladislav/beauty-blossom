import React from "react";
import { useSelector } from "react-redux";

import { getProducts } from "../../../redux/products/selectors";

import ProductCard from "../ProductCard/ProductCard";

import { ProductListContainer } from "./Category.styled";
import { Container } from "../Container";

const Category = () => {
  const items = useSelector(getProducts);

  return (
    <main>
      <Container>
        <ProductListContainer>
          {items.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </ProductListContainer>
      </Container>
    </main>
  );
};

export default Category;
