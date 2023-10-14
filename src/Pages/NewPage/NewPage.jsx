import React from "react";
import { Container } from "../../modules/components/Container";
import ProductsList from "../../modules/components/ProductsList/ProductsList";
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
