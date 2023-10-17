import React from "react";
import {
  selectFilterCategory,
  selectFilterCategorySub,
} from "../../../redux/filter/selectors";
import { selectorGoods } from "../../../redux/products/selectors";
import { useSelector } from "react-redux";
import { Container } from "../../../shared/styles/Container";
import ProductsList from "../../../shared/components/ProductsList/ProductsList";

const SortCategory = () => {
  const items = useSelector(selectFilterCategory);
  const itemsSub = useSelector(selectFilterCategorySub);

  if (items.length === 0) {
    items = itemsSub;
  }
  console.log(itemsSub);
  return (
    <main>
      <Container>
        <ProductsList items={items} />
      </Container>
    </main>
  );
};

export default SortCategory;
