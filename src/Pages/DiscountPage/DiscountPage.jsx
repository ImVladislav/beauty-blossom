import React from "react";
import { useSelector } from "react-redux";

import { selectSale } from "../../redux/products/selectors";

import { Container } from "../../shared/styles/Container";
import ProductsList from "../../shared/components/ProductsList/ProductsList";

const DiscountPage = () => {
  const items = useSelector(selectSale);
  const sortedItems = [...items].sort((a, b) => b.amount - a.amount);

  return (
    <main>
      <Container>
        <ProductsList items={sortedItems} />
      </Container>
    </main>
  );
};

export default DiscountPage;
