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
  // const sortedItems = [...products].sort((a, b) => b.amount - a.amount);
  const sortedItems = [...products].sort((a, b) => {
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

export default SortCategory;
