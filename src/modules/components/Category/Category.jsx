import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/products/selectors";
import ProductsList from "../ProductsList/ProductsList";
import { Container } from "../Container";
import { getGoods } from "../../../redux/operations";

const Category = () => {
  const items = useSelector(getProducts);
  const dispatch = useDispatch();
   const [goodsData, setGoodsData] = useState(null); // Додайте стан для goodsData


  useEffect(() => {
    dispatch(getGoods()).then((resultAction) => {
      if (getGoods.fulfilled.match(resultAction)) {
        const data = resultAction.payload;
        setGoodsData(data); // Оновіть стан з отриманими даними
      } else if (getGoods.rejected.match(resultAction)) {
        const error = resultAction.payload;
        console.error(`Помилка: ${error}`);
      }
    });
  }, []);



  console.log(goodsData); // Отримайте дані з goodsData

  return (
    <main>
      <Container>
        <ProductsList items={items} />
      </Container>
    </main>
  );
};

export default Category;