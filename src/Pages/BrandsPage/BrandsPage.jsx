import React from "react";
import Brands from "../../modules/components/Brands/Brands";

import { useLocation } from "react-router-dom";
import AllBrands from "../../modules/components/AllBrands/AllBrands";






const BrandsPage = () => {
  const { pathname } = useLocation();

 

 





  return <>{pathname !== "/brands" ? <Brands /> : <AllBrands />}</>;
};

export default BrandsPage;
