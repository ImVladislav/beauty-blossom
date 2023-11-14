// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import ProductCard from "../ProductCard/ProductCard";
// import Pagination from "../../../shared/components/Pagination/Pagination";

// import {
//   WrapListProduct,
//   ProductListContainer,
//   FilterContainer,
//   FilterSelect,
//   FilterWrap,
// } from "./ProductsList.styled";
// import { optUserSelector } from "../../../redux/auth/selectors";
// import { useSelector } from "react-redux";
// import NoProducts from "../../../pages/NoProducts/NoProducts";

// const itemsPerPage = 32;

// const ProductsList = ({ items }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedFilter, setSelectedFilter] = useState("none");
//   const [filteredItems, setFilteredItems] = useState(items);
//   const { search } = useLocation();
//   const optUser = useSelector(optUserSelector);

//   useEffect(() => {
//     setFilteredItems(items);
//   }, [items]);
//   // Функція для фільтрації товарів
//   const applyFilters = () => {
//     let newFilteredItems = [...items];

//     if (selectedFilter === "name") {
//       newFilteredItems = newFilteredItems.sort((a, b) =>
//         a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
//       );
//     } else if (selectedFilter === "price") {
//       if (!optUser) {
//         newFilteredItems = newFilteredItems.sort((a, b) => a.price - b.price);
//       } else {
//         newFilteredItems = newFilteredItems.sort(
//           (a, b) => a.priceOPT - b.priceOPT
//         );
//       }
//     } else if (selectedFilter === "inStock") {
//       newFilteredItems = newFilteredItems.filter((item) => item.amount >= 1);
//     }

//     setFilteredItems(newFilteredItems);
//   };

//   //При зміні параметра search у розташуванні (URL)
//   useEffect(() => {
//     const searchParams = new URLSearchParams(search);
//     const filterParam = searchParams.get("filter");
//     const pageParam = searchParams.get("page");

//     if (filterParam !== null) {
//       setSelectedFilter(filterParam);
//     } else {
//       setSelectedFilter("none");
//     }

//     if (pageParam) {
//       setCurrentPage(parseInt(pageParam, 10));
//     }
//   }, [search]);

//   //При зміні selectedFilter або items.
//   useEffect(() => {
//     if (selectedFilter !== "none") {
//       applyFilters();
//     }
//   }, [selectedFilter, items]);

//   // Оновлює URL без перезавантаження сторінки, коли змінюються selectedFilter або currentPage
//   useEffect(() => {
//     const searchParams = new URLSearchParams();

//     if (selectedFilter !== "none") {
//       searchParams.set("filter", selectedFilter);
//     }
//     if (currentPage > 1) {
//       searchParams.set("page", currentPage);
//     }

//     const newSearch = searchParams.toString();

//     window.history.pushState({}, "", `${newSearch}`);
//   }, [selectedFilter, currentPage]);

//   // Обробка для оновлення компонента при "Без фільтра"
//   useEffect(() => {
//     if (selectedFilter === "none") {
//       applyFilters();
//     }
//   }, [search, selectedFilter]);

//   // Розрахунок кількості сторінок на основі загальної кількості товарів
//   const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

//   // Функція для отримання товарів для поточної сторінки
//   const getCurrentPageItems = () => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     return filteredItems.slice(startIndex, endIndex);
//   };
//   // Оновлюємо клас при зміні сторінки
//   useEffect(() => {
//     const wrapListProduct = document.querySelector(".WrapListProduct");
//     if (wrapListProduct) {
//       wrapListProduct.classList.add("active");

//       // Відстрочення видалення класу для дочекатися анімації перед зміною сторінки
//       setTimeout(() => {
//         wrapListProduct.classList.remove("active");
//       }, 500);
//     }
//   }, [currentPage]);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);

//     // Підняття сторінки вгору
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div className="WrapListProduct">
//       <FilterContainer>
//         <FilterWrap>
//           <FilterSelect
//             value={selectedFilter}
//             onChange={(e) => {
//               setCurrentPage(1); //Встановлює поточну сторінку на 1 після зміни фільтра
//               setSelectedFilter(e.target.value);
//             }} //
//           >
//             <option value="none">Без фільтра</option>
//             <option value="name">Фільтрувати за назвою</option>
//             <option value="price">Фільтрувати за ціною</option>
//             <option value="inStock">Товари в наявності</option>
//           </FilterSelect>
//         </FilterWrap>
//       </FilterContainer>
//       <WrapListProduct>
//         <ProductListContainer>
//           {getCurrentPageItems().length > 0 ? (
//             getCurrentPageItems().map((item) => (
//               <ProductCard key={item.id} products={item} />
//             ))
//           ) : (
//             <NoProducts />
//           )}
//         </ProductListContainer>
//       </WrapListProduct>
//       {filteredItems.length > itemsPerPage && (
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={handlePageChange}
//         />
//       )}
//     </div>
//   );
// };

// export default ProductsList;

import React, { useState, useEffect } from "react";

import ProductCard from "../ProductCard/ProductCard";
import NoProducts from "../../../pages/NoProducts/NoProducts";

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
import { useLocation, useNavigate } from "react-router-dom";
import { optUserSelector } from "../../../redux/auth/selectors";
import { useSelector } from "react-redux";

const ProductList = ({ items }) => {
  const [filteredProducts, setFilteredProducts] = useState(items);
  const [filter, setFilter] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 32;
  const navigate = useNavigate(); // Хік для навігації
  const location = useLocation();

  const optUser = useSelector(optUserSelector);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [items]);
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
