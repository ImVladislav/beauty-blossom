import React from "react";
import { Container } from "../../shared/styles/Container";
import ProductsList from "../../shared/components/ProductsList/ProductsList";
import { useSelector } from "react-redux";
import { selectNew } from "../../redux/products/selectors";

const NewPage = () => {
  const items = useSelector(selectNew);

  return (
    <main>
      <Container>
        <ProductsList items={items} />
      </Container>
    </main>
  );
};

export default NewPage;
