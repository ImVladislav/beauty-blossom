import React, { useEffect, useState } from "react";

import Category from "../../modules/Category/Category";
import { useLocation } from "react-router-dom";

import SortCategory from "../../modules/SortCategory/SortCategory";
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
    </>
  );
};

export default CategoryPage;
