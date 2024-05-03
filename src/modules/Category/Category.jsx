import React from "react";
import { useSelector } from "react-redux";
import { selectGoods } from "../../redux/products/selectors";
import ProductsList from "../../shared/components/ProductsList/ProductsList";
import { Container } from "../../shared/styles/Container";

const Category = () => {
  const items = useSelector(selectGoods);
  // const sortedItems = [...items].sort((a, b) => b.amount - a.amount);
  const sortedItems = items
    .filter((item) => (item.new || item.sale) && item.amount !== 0)
    .concat(
      items.filter((item) => !(item.new || item.sale) && item.amount !== 0)
    )
    .concat(
      items.filter((item) => (item.new || item.sale) && item.amount === 0)
    )
    .concat(
      items.filter((item) => !(item.new || item.sale) && item.amount === 0)
    );

  return (
    <main>
      <Container>
        <ProductsList items={sortedItems} />
      </Container>
    </main>
  );
};

export default Category;
