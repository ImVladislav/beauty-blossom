import React from "react";

import Category from "../../modules/Category/Category";
import { useLocation } from "react-router-dom";

import SortCategory from "../../modules/Category/SortCategory/SortCategory";

const CategoryPage = () => {
  const { pathname } = useLocation();
  return <>{pathname !== "/category" ? <SortCategory /> : <Category />}</>;
};

export default CategoryPage;
