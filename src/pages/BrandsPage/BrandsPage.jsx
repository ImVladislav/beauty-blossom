import React, { useEffect, useState } from "react";
import Brands from "../../modules/Brands/Brands";
import { useLocation } from "react-router-dom";
import AllBrands from "../../modules/AllBrands/AllBrands";
import ScrollToTop from "../../shared/components/ScrollToTop/ScrollToTop";
import { Loader } from "../../shared/components/Loader/Loader";

const BrandsPage = () => {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : pathname !== "/brands" ? (
        <Brands />
      ) : (
        <AllBrands />
      )}
      <ScrollToTop />
    </>
  );
};

export default BrandsPage;
