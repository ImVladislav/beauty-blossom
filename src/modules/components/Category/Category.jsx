import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../../redux/products/selectors";

import ProductCard from "../ProductCard/ProductCard";

import { ProductListContainer } from "./Category.styled";
import { Container } from "../Container";
import Pagination from "../../../shared/components/Pagination/Pagination";
import { getGoods } from "../../../redux/operations";

const itemsPerPage = 12;

const Category = () => {
  const items = useSelector(getProducts);
  const [currentPage, setCurrentPage] = useState(1);


  // Розрахунок кількості сторінок на основі загальної кількості товарів
  const totalPages = Math.ceil(items.length / itemsPerPage);


    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGoods())
      .then((resultAction) => {
        if (getGoods.fulfilled.match(resultAction)) {
          const goodsData = resultAction.payload;
          console.log(goodsData);

        } else if (getGoods.rejected.match(resultAction)) {
          const error = resultAction.payload;
          console.error(`Помилка: ${error}`);

        }
      });
  }, []);


  // Функція для отримання товарів для поточної сторінки
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <main>
      <Container>
        <ProductListContainer>
          {getCurrentPageItems().map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </ProductListContainer>
      </Container>
      <Pagination
        currentPage={currentPage} //поточна сторінка
        totalPages={totalPages} //загальна кількість сторінок
        onPageChange={handlePageChange} //функцію для зміни сторінки
      />
    </main>
  );
};

export default Category;
