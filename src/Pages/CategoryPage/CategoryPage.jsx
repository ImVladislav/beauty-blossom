import React from "react";

import Category from "../../modules/Category/Category";
import { useLocation } from "react-router-dom";
import ScrollToTop from "../../shared/components/ScrollToTop/ScrollToTop";
import SortCategory from "../../modules/Category/SortCategory/SortCategory";

const CategoryPage = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/category" ? <SortCategory /> : <Category />}
      <ScrollToTop />
    </>
  );
};

export default CategoryPage;
