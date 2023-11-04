import React, { useEffect, useState } from "react";

import Category from "../../modules/Category/Category";
import { useLocation } from "react-router-dom";
import ScrollToTop from "../../shared/components/ScrollToTop/ScrollToTop";
import SortCategory from "../../modules/Category/SortCategory/SortCategory";
import { Loader } from "../../shared/components/Loader/Loader";

const CategoryPage = () => {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : pathname !== "/category" ? (
        <SortCategory />
      ) : (
        <Category />
      )}
      <ScrollToTop />
    </>
  );
};

export default CategoryPage;
