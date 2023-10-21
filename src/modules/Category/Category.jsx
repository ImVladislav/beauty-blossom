import React from "react";
import { useSelector } from "react-redux";
import { selectGoods } from "../../redux/products/selectors";
import ProductsList from "../../shared/components/ProductsList/ProductsList";
import { Container } from "../../shared/styles/Container";

const Category = () => {
  const items = useSelector(selectGoods);

  return (
    <main>
      <Container>
        <ProductsList items={items} />
      </Container>
    </main>
  );
};

export default Category;
