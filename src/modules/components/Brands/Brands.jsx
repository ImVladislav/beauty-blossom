import React from "react";
import { useSelector } from "react-redux";

import { selectFilterBrand } from "../../../redux/filter/selectors";

import ProductsList from "../ProductsList/ProductsList";
import { Container } from "../Container";

const Brands = () => {
  const items = useSelector(selectFilterBrand);

  return (
    <main>
      <Container>
        <ProductsList items={items} />
      </Container>
    </main>
  );
};

export default Brands;
