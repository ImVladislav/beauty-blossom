import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import ProductCard from "../ProductCard/ProductCard";
import NoProducts from "../../../pages/NoProducts/NoProducts";
import { optUserSelector } from "../../../redux/auth/selectors";
import { Loader } from "../Loader/Loader";

import {
  WrapListProduct,
  ProductListContainer,
  FilterContainer,
  FilterSelect,
  FilterWrap,
  IconLeft,
  IconRight,
  PageButton,
  Pagination,
} from "./ProductsList.styled";

const ProductList = ({ items }) => {
  const [filteredProducts, setFilteredProducts] = useState(items);
  const [filter, setFilter] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);
  const [showLoader, setShowLoader] = useState(true);

  const itemsPerPage = 32;
  const navigate = useNavigate();
  const location = useLocation();

  const optUser = useSelector(optUserSelector);

  // Loader на 1 секунду при пустому items
  useEffect(() => {
    if (!items || items.length === 0) {
      const timer = setTimeout(() => setShowLoader(false), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowLoader(false);
    }
  }, [items]);

  // Обробка фільтра
  const handleFilterChange = (e) => {
    const { value } = e.target;
    setFilter(value);
    setCurrentPage(1);

    const searchParams = new URLSearchParams(location.search);
    searchParams.set("filter", value);
    searchParams.set("page", 1);

    const newSearch = searchParams.toString();
    const targetPath =
      location.pathname === "/search"
        ? `${location.pathname}?${newSearch}`
        : `?${newSearch}`;

    navigate(targetPath);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("query");

    const safeDecode = (str) => {
      try {
        return decodeURIComponent(str);
      } catch (err) {
        console.warn("🚨 decodeURIComponent failed for:", str);
        return str;
      }
    };

    const normalize = (str) =>
      safeDecode(str || "")
        .toLowerCase()
        .replace(/\+/g, " ")
        .replace(/\s+/g, " ")
        .replace(/[^a-zа-яіїєґ\s]/gi, "")
        .trim();

    let filtered = [...items];

    if (searchQuery) {
      const normQuery = normalize(searchQuery);
      filtered = filtered.filter((item) =>
        normalize(item.name).includes(normQuery)
      );
    }

    if (filter === "nameABC") {
      filtered = filtered.sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
      );
    } else if (filter === "nameCBA") {
      filtered = filtered.sort((a, b) =>
        b.name.localeCompare(a.name, undefined, { sensitivity: "base" })
      );
    } else if (filter === "priceMin") {
      filtered = optUser
        ? filtered.sort((a, b) => a.priceOPT - b.priceOPT)
        : filtered.sort((a, b) => a.price - b.price);
    } else if (filter === "priceMax") {
      filtered = optUser
        ? filtered.sort((a, b) => b.priceOPT - a.priceOPT)
        : filtered.sort((a, b) => b.price - a.price);
    } else if (filter === "inStock") {
      filtered = filtered.filter((item) => item.amount >= 1);
    }

    setFilteredProducts(filtered);
  }, [filter, items, optUser, location.search]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const filterParam = searchParams.get("filter");
    const pageParam = searchParams.get("page");

    if (filterParam) setFilter(filterParam);
    if (pageParam) setCurrentPage(parseInt(pageParam));
    else setCurrentPage(1);
  }, [location.search]);

  // Пагінація
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginate = (pageNumber) => {
    // setTimeout(() => {
    //   window.scrollTo({ top: 0, behavior: "smooth" });
    // }, 100);

    const searchParams = new URLSearchParams(location.search);
    searchParams.set("filter", filter);
    searchParams.set("page", pageNumber);

    const newSearch = searchParams.toString();
    const targetPath =
      location.pathname === "/search"
        ? `${location.pathname}?${newSearch}`
        : `?${newSearch}`;

    navigate(targetPath);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageBlocks = 5;
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
      if (startPage !== 2) pageNumbers.push("...");
    }

    for (let i = startPage; i <= endPage; i++) pageNumbers.push(i);

    if (endPage !== totalPages) {
      if (endPage !== totalPages - 1) pageNumbers.push("...");
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  useEffect(() => {
    const scrollToTop = () => {
      // В Safari це більш стабільно
      const scrollTarget = document.documentElement || document.body;

      requestAnimationFrame(() => {
        setTimeout(() => {
          scrollTarget.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      });
    };

    scrollToTop();
  }, [location.search]);

  if (showLoader) return <Loader />;

  return (
    <>
      {currentProducts.length > 0 ? (
        <div>
          <FilterContainer>
            <FilterWrap>
              <FilterSelect value={filter} onChange={handleFilterChange}>
                <option value="none">Без фільтра</option>
                <option value="nameABC">Назва (А - Я)</option>
                <option value="nameCBA">Назва (Я - А)</option>
                <option value="priceMin">Ціна (за зростанням)</option>
                <option value="priceMax">Ціна (за зменшенням)</option>
                <option value="inStock">Товари в наявності</option>
              </FilterSelect>
            </FilterWrap>
          </FilterContainer>
          <WrapListProduct>
            <ProductListContainer>
              {currentProducts.map((item) => (
                <ProductCard key={item.id || item.productId} products={item} />
              ))}
            </ProductListContainer>
          </WrapListProduct>
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
        </div>
      ) : (
        <NoProducts />
      )}
    </>
  );
};

export default ProductList;
