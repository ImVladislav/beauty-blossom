import React from "react";
import { useSelector } from "react-redux";
import { selectGoods } from "../../redux/products/selectors";
import ProductsList from "../../shared/components/ProductsList/ProductsList";
import { Container } from "../../shared/styles/Container";

const Category = () => {
  const items = useSelector(selectGoods);
  // const sortedItems = [...items].sort((a, b) => b.amount - a.amount);
  const sortedItems = [...items].sort((a, b) => {
    // Якщо товар a або товар b має властивість new або sale, то ці товари йдуть спершу
    if ((a.new || a.sale) && !(b.new || b.sale)) {
      return -1; // Перемістити товар a вище товару b
    } else if (!(a.new || a.sale) && (b.new || b.sale)) {
      return 1; // Перемістити товар b вище товару a
    } else {
      return b.amount - a.amount; // Сортування за кількістю, якщо немає умови
    }
  });

  return (
    <main>
      <Container>
        <ProductsList items={sortedItems} />
      </Container>
    </main>
  );
};

export default Category;
