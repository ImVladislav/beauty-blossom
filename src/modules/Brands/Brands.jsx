import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectFilterBrand } from "../../redux/filter/selectors";
import { setfilter } from "../../redux/filter/slice";

import ProductsList from "../../shared/components/ProductsList/ProductsList";
import { Container } from "../../shared/styles/Container";
import { Helmet } from "react-helmet";

const Brands = () => {
  const { brands } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (brands) {
      dispatch(setfilter(brands));
    }
  }, [brands, dispatch]);

  const items = useSelector(selectFilterBrand);
  const sortedItems = items
    .filter((item) => (item.new || item.sale) && item.amount !== 0)
    .concat(
      items.filter((item) => !(item.new || item.sale) && item.amount !== 0)
    )
    .concat(
      items.filter((item) => (item.new || item.sale) && item.amount === 0)
    )
    .concat(
      items.filter((item) => !(item.new || item.sale) && item.amount === 0)
    );

  const allItemsNmeForMetaHelmet = sortedItems.map((item) => item.name);
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Beauty Blossom | Бренди </title>
        <meta name="description" content={allItemsNmeForMetaHelmet} />
        <meta name="keywords" content={allItemsNmeForMetaHelmet} />
      </Helmet>
      <Container>
        <ProductsList items={sortedItems} />
      </Container>
    </main>
  );
};

export default Brands;
