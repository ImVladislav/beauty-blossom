import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  selectSearchQuery,
  selectSearchQueryCode,
} from "../../redux/search/selectors.js";

import ProductsList from "../../shared/components/ProductsList/ProductsList.jsx";
import { Container } from "../../shared/styles/Container";

const SearchPage = () => {
  const searchQuery = useSelector(selectSearchQuery) || [];
  const searchQueryCode = useSelector(selectSearchQueryCode) || [];

  const search = useMemo(() => {
    if (searchQuery.length > 0) {
      return [...searchQuery].sort((a, b) => b.amount - a.amount);
    } else if (searchQueryCode.length > 0) {
      return [...searchQueryCode].sort((a, b) => b.amount - a.amount);
    }
    return [];
  }, [searchQuery, searchQueryCode]);

  const noResults =
    searchQuery.length === 0 && searchQueryCode.length === 0;

  useEffect(() => {
    if (noResults) {
      toast.error("Нічого не знайдено за вашим запитом!");
    }
  }, [noResults]);

  return (
    <main>
      <Container>
        <ProductsList items={search} />
      </Container>
    </main>
  );
};

export default SearchPage;