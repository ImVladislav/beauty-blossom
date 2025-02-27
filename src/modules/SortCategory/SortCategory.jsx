import React from "react";
import {
  selectFilterCategory,
  selectFilterCategorySub,
  selectFilterCategorySubSub,
} from "../../redux/filter/selectors";

import { useSelector } from "react-redux";

import { Container } from "../../shared/styles/Container";
import ProductsList from "../../shared/components/ProductsList/ProductsList";
import { useLocation } from "react-router-dom";

const SortCategory = () => {
  const categoryItems = useSelector(selectFilterCategory);
  const subCategoryItems = useSelector(selectFilterCategorySub);
  const subSubCategoryItems = useSelector(selectFilterCategorySubSub);

  // console.log(categoryItems);
  // const navigateToChild = () => {
  //   navigate("/child", { state: { parentPathname: window.location.pathname } });
  // };
  // console.log(window.location.pathname);
  // eslint-disable-next-line no-unused-vars
  const location = useLocation();

  // console.log(location);
  let products = categoryItems;

  if (products.length === 0) {
    products = subCategoryItems;
  }

  if (products.length === 0) {
    products = subSubCategoryItems;
  }
  const sortedItems = products
    .filter((item) => (item.new || item.sale) && item.amount !== 0)
    .concat(
      products.filter((item) => !(item.new || item.sale) && item.amount !== 0)
    )
    .concat(
      products.filter((item) => (item.new || item.sale) && item.amount === 0)
    )
    .concat(
      products.filter((item) => !(item.new || item.sale) && item.amount === 0)
    );

    


  return (
    <main>
      <Container>
        <ProductsList items={sortedItems} />
      </Container>
    </main>
  );
};

export default SortCategory;
