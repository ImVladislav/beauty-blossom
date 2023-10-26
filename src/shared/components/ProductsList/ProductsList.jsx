import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "../../../shared/components/Pagination/Pagination";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import {
  ProductListContainer,
  FilterContainer,
  FilterSelect,
  FilterWrap,
} from "./ProductsList.styled";
import { optUserSelector } from "../../../redux/auth/selectors";
import { useSelector } from "react-redux";

const itemsPerPage = 12;

const ProductsList = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState("none");
  const [filteredItems, setFilteredItems] = useState(items);
  const { search } = useLocation();
  const optUser = useSelector(optUserSelector);
  const prevSelectedFilter = useRef(selectedFilter);

  //
  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  // Функція для фільтрації товарів
  const applyFilters = () => {
    let newFilteredItems = [...items];

    if (selectedFilter === "name") {
      newFilteredItems = newFilteredItems.sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
      );
    } else if (selectedFilter === "price") {
      if (!optUser) {
        newFilteredItems = newFilteredItems.sort((a, b) => a.price - b.price);
      } else {
        newFilteredItems = newFilteredItems.sort(
          (a, b) => a.priceOPT - b.priceOPT
        );
      }
    } else if (selectedFilter === "inStock") {
      newFilteredItems = newFilteredItems.filter((item) => item.amount >= 1);
    }

    setFilteredItems(newFilteredItems);
  };
  //
  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    const filterParam = searchParams.get("filter");
    const pageParam = searchParams.get("page");

    if (filterParam !== null) {
      setSelectedFilter(filterParam);
    } else {
      setSelectedFilter("none");
    }

    if (pageParam) {
      setCurrentPage(parseInt(pageParam, 10));
    }
  }, [search]);

  //
  useEffect(() => {
    if (prevSelectedFilter.current !== selectedFilter) {
      // setCurrentPage(1);
      applyFilters();
    }
    prevSelectedFilter.current = selectedFilter;
  }, [selectedFilter, prevSelectedFilter]);

  //
  useEffect(() => {
    // Оновлення URL з новим фільтром і сторінкою без перезавантаження сторінки
    const searchParams = new URLSearchParams();

    if (selectedFilter !== "none") {
      searchParams.set("filter", selectedFilter);
    }
    if (currentPage > 1) {
      searchParams.set("page", currentPage);
    }

    const newSearch = searchParams.toString();

    window.history.pushState({}, "", `?${newSearch}`);
  }, [selectedFilter, currentPage]);

  // Розрахунок кількості сторінок на основі загальної кількості товарів
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Функція для отримання товарів для поточної сторінки
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredItems.slice(startIndex, endIndex);
  };

  return (
    <div style={{ width: "1440px", padding: "6px" }}>
      <FilterContainer>
        <FilterWrap>
          <FilterSelect
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <option value="none">Без фільтра</option>
            <option value="name">Фільтрувати за назвою</option>
            <option value="price">Фільтрувати за ціною</option>
            <option value="inStock">Товари в наявності</option>
          </FilterSelect>
        </FilterWrap>
      </FilterContainer>

      <ProductListContainer>
        {getCurrentPageItems().length > 0 ? (
          getCurrentPageItems().map((item) => (
            <ProductCard key={item.id} products={item} />
          ))
        ) : (
          <p>NO PRODUCTS</p>
        )}
      </ProductListContainer>
      {filteredItems.length > itemsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
      <ScrollToTop />
    </div>
  );
};

export default ProductsList;
