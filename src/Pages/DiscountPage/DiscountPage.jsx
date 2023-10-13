import React from "react";
import { useSelector } from "react-redux";

import { selectSale } from "../../redux/products/selectors";

import { Container } from "../../modules/components/Container";
import ProductsList from "../../modules/components/ProductsList/ProductsList";

const DiscountPage = () => {
  const items = useSelector(selectSale);

  return (
    <main>
      <Container>
        <ProductsList items={items} />
      </Container>
    </main>
  );
};

export default DiscountPage;
