import React, { useState } from "react";

import ProductCard from "../ProductCard/ProductCard";
import { Container } from "../../styles/Container";
import Pagination from "../../../shared/components/Pagination/Pagination";

import { ProductListContainer } from "./ProductsList.styled";

const itemsPerPage = 12;

const ProductsList = ({ items }) => {
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
      <ProductListContainer>
        {getCurrentPageItems().length > 0 ? (
          getCurrentPageItems().map((item) => (
            <ProductCard key={item.id} product={item} />
          ))
        ) : (
          <p>NO PRODUCTS</p>
        )}
      </ProductListContainer>

      <Pagination
        currentPage={currentPage} //поточна сторінка
        totalPages={totalPages} //загальна кількість сторінок
        onPageChange={handlePageChange} //функцію для зміни сторінки
      />
    </main>
  );
};

export default ProductsList;