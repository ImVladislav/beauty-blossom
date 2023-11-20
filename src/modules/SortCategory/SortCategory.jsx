import React from "react";
import {
  selectFilterCategory,
  selectFilterCategorySub,
  selectFilterCategorySubSub,
} from "../../redux/filter/selectors";

import { useSelector } from "react-redux";

import { Container } from "../../shared/styles/Container";
import ProductsList from "../../shared/components/ProductsList/ProductsList";

const SortCategory = () => {
  const categoryItems = useSelector(selectFilterCategory);
  const subCategoryItems = useSelector(selectFilterCategorySub);
  const subSubCategoryItems = useSelector(selectFilterCategorySubSub);

  let products = categoryItems;

  if (products.length === 0) {
    products = subCategoryItems;
  }

  if (products.length === 0) {
    products = subSubCategoryItems;
  }
  const sortedItems = [...products].sort((a, b) => b.amount - a.amount);

  return (
    <main>
      <Container>
        <ProductsList items={sortedItems} />
      </Container>
    </main>
  );
};

export default SortCategory;
