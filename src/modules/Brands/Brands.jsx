import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectFilterBrand } from "../../redux/filter/selectors";
import { setfilter } from "../../redux/filter/slice";

import ProductsList from "../../shared/components/ProductsList/ProductsList";
import { Container } from "../../shared/styles/Container";

const Brands = () => {
  const { brands } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (brands) {
      dispatch(setfilter(brands));
    }
  }, [brands, dispatch]);

  const items = useSelector(selectFilterBrand);
  const sortedItems = [...items].sort((a, b) => b.amount - a.amount);

  return (
    <main>
      <Container>
        <ProductsList items={sortedItems} />
      </Container>
    </main>
  );
};

export default Brands;
