import React from "react";
import { useSelector } from "react-redux";

import { getProducts } from "../../../redux/products/selectors";

import ProductsList from "../ProductsList/ProductsList";
import { Container } from "../Container";

const Category = () => {
  const items = useSelector(getProducts);

  return (
    <main>
      <Container>
        <ProductsList items={items} />
      </Container>
    </main>
  );
};

export default Category;
