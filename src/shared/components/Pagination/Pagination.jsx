import React, { useEffect } from "react";
import {
  PaginationContainer,
  PageButton,
  IconLeft,
  IconRight,
} from "./Pagination.styled";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxDisplayedPages = 5;
  const pageButtons = [];
  const shouldDisplayNextArrow = currentPage < totalPages;

  const renderPageButton = (page, label, isActive) => (
    <PageButton
      key={page}
      onClick={() => handlePageChange(page)}
      $active={isActive ? "true" : "false"}
    >
      {label}
    </PageButton>
  );
  const handlePageChange = (page) => {
    // Перевірка на існування "URLSearchParams" для браузерів, які його не підтримують
    if ("URLSearchParams" in window) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("page", page);
      // Оновлення URL з новим параметром сторінки без перезавантаження сторінки
      window.history.pushState(null, "", `?${searchParams.toString()}`);
    }
    onPageChange(page);
  };

  useEffect(() => {
    // Отримання значення сторінки з URL і оновлення сторінки
    const searchParams = new URLSearchParams(window.location.search);
    const page = parseInt(searchParams.get("page") || "1", 10);
    onPageChange(page);
  }, [onPageChange]);

  // Обчислюємо індекс початкової сторінки для відображення
  let startPage = Math.max(1, currentPage - Math.floor(maxDisplayedPages / 2));
  // Обчислюємо індекс кінцевої сторінки для відображення
  let endPage = Math.min(startPage + maxDisplayedPages - 1, totalPages);
  // Перераховуємо startPage знову для коректної кількості відображуваних сторінок
  startPage = Math.max(1, endPage - maxDisplayedPages + 1);

  if (startPage > 1) {
    pageButtons.push(renderPageButton(1, "1", false));
    pageButtons.push(<span key="ellipsis1">...</span>);
  }

  for (let page = startPage; page <= endPage; page++) {
    const isActive = page === currentPage;
    pageButtons.push(renderPageButton(page, page.toString(), isActive));
  }
  if (endPage < totalPages) {
    pageButtons.push(<span key="ellipsis2">...</span>);
    pageButtons.push(
      renderPageButton(totalPages, totalPages.toString(), false)
    );
  }
  return (
    <PaginationContainer>
      {currentPage > 1 &&
        renderPageButton(currentPage - 1, <IconLeft />, false)}
      {pageButtons}
      {shouldDisplayNextArrow &&
        renderPageButton(currentPage + 1, <IconRight />, false)}
    </PaginationContainer>
  );
};

export default Pagination;
