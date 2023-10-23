import React from "react";
import { useSelector } from "react-redux";

import { selectSale } from "../../redux/products/selectors";

import { Container } from "../../shared/styles/Container";
import ProductsList from "../../shared/components/ProductsList/ProductsList";
import ScrollToTop from "../../shared/components/ScrollToTop/ScrollToTop";

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
