import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import ProductCard from "../ProductCard/ProductCard";
import NoProducts from "../../../pages/NoProducts/NoProducts";
import { optUserSelector } from "../../../redux/auth/selectors";

import {
  WrapListProduct,
  ProductListContainer,
  FilterContainer,
  FilterSelect,
  FilterWrap,
  Container,
  IconLeft,
  IconRight,
  PageButton,
  Pagination,
} from "./ProductsList.styled";

const ProductList = ({ items }) => {
  const [filteredProducts, setFilteredProducts] = useState(items);
  const [filter, setFilter] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 32;
  const navigate = useNavigate(); // Хік для навігації
  const location = useLocation();

  const optUser = useSelector(optUserSelector);

  // Функція для фільтрації продуктів
  const handleFilterChange = (e) => {
    const { value } = e.target;
    setFilter(value);
    setCurrentPage(1);
    navigate(`?filter=${value}&page=1`);
  };

  useEffect(() => {
    let filtered = [...items];

    if (filter === "name") {
      filtered = filtered.sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
      );
    } else if (filter === "price") {
      if (!optUser) {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else {
        filtered = filtered.sort((a, b) => a.priceOPT - b.priceOPT);
      }
    } else if (filter === "inStock") {
      filtered = filtered.filter((item) => item.amount >= 1);
    }

    setFilteredProducts(filtered);
  }, [filter, items]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const filterParam = searchParams.get("filter");
    const pageParam = searchParams.get("page");

    if (filterParam) {
      setFilter(filterParam);
    }
    if (pageParam) {
      setCurrentPage(parseInt(pageParam));
    } else {
      setCurrentPage(1); // Оновлення currentPage відповідно до логіки
    }
    // Підняття сторінки вгору
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.search]);

  // Логіка для пагінації
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginate = (pageNumber) => {
    navigate(`?filter=${filter}&page=${pageNumber}`);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageBlocks = 5; // максимальна кількість блоків сторінок (центральних сторінок)
    let startPage, endPage;

    if (totalPages <= maxPageBlocks) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= Math.ceil(maxPageBlocks / 2)) {
        startPage = 1;
        endPage = maxPageBlocks;
      } else if (currentPage + Math.floor(maxPageBlocks / 2) >= totalPages) {
        startPage = totalPages - maxPageBlocks + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - Math.floor(maxPageBlocks / 2);
        endPage = currentPage + Math.floor(maxPageBlocks / 2);
      }
    }

    if (startPage !== 1) {
      pageNumbers.push(1);
      if (startPage !== 2) {
        pageNumbers.push("...");
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage !== totalPages) {
      if (endPage !== totalPages - 1) {
        pageNumbers.push("...");
      }
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };
  // Підняття сторінки вгору
  useEffect(() => {
    const wrapListProduct = document.querySelector(".WrapListProduct");
    if (wrapListProduct) {
      wrapListProduct.classList.add("active");

      // Відстрочення видалення класу для дочекатися анімації перед зміною сторінки
      setTimeout(() => {
        wrapListProduct.classList.remove("active");
      }, 500);
    }
  }, [currentPage]);

  return (
    <>
      {currentProducts.length > 0 ? (
        <Container className="WrapListProduct">
          <FilterContainer>
            <FilterWrap>
              {/* Замінено введення на селект */}
              <FilterSelect value={filter} onChange={handleFilterChange}>
                <option value="none">Без фільтра</option>
                <option value="name">Фільтрувати за назвою</option>
                <option value="price">Фільтрувати за ціною</option>
                <option value="inStock">Товари в наявності</option>
              </FilterSelect>
            </FilterWrap>
          </FilterContainer>
          <WrapListProduct>
            <ProductListContainer>
              {/* Відображення списку товарів */}

              {currentProducts.map((item) => (
                <ProductCard key={item.id} products={item} />
              ))}
            </ProductListContainer>
          </WrapListProduct>
          {/* Пагінація */}

          {getPageNumbers().length > 1 && (
            <Pagination>
              {currentPage !== 1 && (
                <PageButton>
                  <IconLeft onClick={() => paginate(currentPage - 1)} />
                </PageButton>
              )}
              {getPageNumbers().map((pageNumber, index) => (
                <React.Fragment key={index}>
                  {pageNumber === "..." ? (
                    <span>...</span>
                  ) : (
                    <PageButton
                      onClick={() =>
                        typeof pageNumber === "number"
                          ? paginate(pageNumber)
                          : null
                      }
                      $active={
                        typeof pageNumber === "number" &&
                        pageNumber === currentPage
                          ? "true"
                          : "false"
                      }
                    >
                      {pageNumber}
                    </PageButton>
                  )}
                </React.Fragment>
              ))}
              {currentPage !== totalPages && (
                <PageButton>
                  <IconRight onClick={() => paginate(currentPage + 1)} />
                </PageButton>
              )}
            </Pagination>
          )}
        </Container>
      ) : (
        <NoProducts />
      )}
    </>
  );
};

export default ProductList;
