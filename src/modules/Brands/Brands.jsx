import React from "react";
import { useSelector } from "react-redux";

import { selectFilterBrand } from "../../redux/filter/selectors";

import ProductsList from "../../shared/components/ProductsList/ProductsList";
import { Container } from "../../shared/styles/Container";

const Brands = () => {
  const items = useSelector(selectFilterBrand);
  const sortedItems = [...items].sort((a, b) => b.amount - a.amount);

  return (
    <main>
      <Container>
        <ProductsList items={sortedItems} />
      </Container>
    </main>
  );
};

export default Brands;
