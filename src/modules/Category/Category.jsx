import React from "react";
import { useSelector } from "react-redux";
import { selectorGoods } from "../../redux/products/selectors";
import ProductsList from "../../shared/components/ProductsList/ProductsList";
import { Container } from "../../shared/styles/Container";

const Category = () => {
  const items = useSelector(selectorGoods);

  return (
    <main>
      <Container>
        <ProductsList items={items} />
      </Container>
    </main>
  );
};

export default Category;
