import React, { useState } from "react";
import { useSelector } from "react-redux";

import { getProducts } from "../../../redux/products/selectors";

import ProductCard from "../ProductCard/ProductCard";

import { ProductListContainer } from "./Category.styled";
import { Container } from "../Container";
import Pagination from "../../../shared/components/Pagination/Pagination";

const itemsPerPage = 12;

const Category = () => {
  const items = useSelector(getProducts);
  const [currentPage, setCurrentPage] = useState(1);

  // Розрахунок кількості сторінок на основі загальної кількості товарів
  const totalPages = Math.ceil(items.length / itemsPerPage);

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
