import React from "react";
import { Container } from "../../shared/styles/Container";
import ProductsList from "../../shared/components/ProductsList/ProductsList";
import { useSelector } from "react-redux";
import { selectNew } from "../../redux/products/selectors";

const NewPage = () => {
  const items = useSelector(selectNew);
  const sortedItems = [...items].sort((a, b) => b.amount - a.amount);
  return (
    <main>
      <Container>
        <ProductsList items={sortedItems} />
      </Container>
    </main>
  );
};

export default NewPage;
