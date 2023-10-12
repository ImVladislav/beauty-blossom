import React from "react";
import { useSelector } from "react-redux";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../../redux/products/selectors";

import ProductsList from "../ProductsList/ProductsList";
import { Container } from "../Container";

import { getGoods } from "../../../redux/operations";

const Category = () => {
  const items = useSelector(getProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGoods()).then((resultAction) => {
      if (getGoods.fulfilled.match(resultAction)) {
        const goodsData = resultAction.payload;
        console.log(goodsData);
      } else if (getGoods.rejected.match(resultAction)) {
        const error = resultAction.payload;
        console.error(`Помилка: ${error}`);
      }
    });
  }, []);

  return (
    <main>
      <Container>
        <ProductsList items={items} />
      </Container>
    </main>
  );
};

export default Category;
