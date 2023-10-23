import React from "react";
import Brands from "../../modules/Brands/Brands";
import { useLocation } from "react-router-dom";
import AllBrands from "../../modules/AllBrands/AllBrands";
import ScrollToTop from "../../shared/components/ScrollToTop/ScrollToTop";

const BrandsPage = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/brands" ? <Brands /> : <AllBrands />}
      <ScrollToTop />
    </>
  );
};

export default BrandsPage;
