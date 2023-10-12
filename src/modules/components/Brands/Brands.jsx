import React, { useState } from "react";
import { useSelector } from "react-redux";

import { selectFilterBrand } from "../../../redux/filter/selectors";

import Pagination from "../../../shared/components/Pagination/Pagination";
import ProductCard from "../ProductCard/ProductCard";
import { Container } from "../Container";
import { ProductListContainer } from "./Brands.styles";

const itemsPerPage = 12;

const Brands = () => {
  const items = useSelector(selectFilterBrand);
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
          {getCurrentPageItems().length > 0 ? (
            getCurrentPageItems().map((item) => (
              <ProductCard key={item.id} product={item} />
            ))
          ) : (
            <p>NO PRODUCTS</p>
          )}
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

export default Brands;
