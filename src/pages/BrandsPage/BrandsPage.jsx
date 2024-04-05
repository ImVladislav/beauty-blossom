import React, { useEffect, useState } from "react";
import Brands from "../../modules/Brands/Brands";
import { useLocation } from "react-router-dom";
import AllBrands from "../../modules/AllBrands/AllBrands";

import { Loader } from "../../shared/components/Loader/Loader";
import { Helmet } from "react-helmet";

const BrandsPage = () => {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Beauty Blossom | Бренди </title>
        <meta name="description" content="Пошук кометикі по брендам" />
      </Helmet>
      {loading ? (
        <Loader />
      ) : pathname !== "/brands" ? (
        <Brands />
      ) : (
        <AllBrands />
      )}
    </>
  );
};

export default BrandsPage;
