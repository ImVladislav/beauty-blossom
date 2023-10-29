import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  selectSearchQuery,
  selectSearchQueryCode,
} from "../../redux/search/selectors.js";

import ProductsList from "../../shared/components/ProductsList/ProductsList.jsx";
import { Container } from "../../shared/styles/Container";

const SearchPage = () => {
  const searchQuery = useSelector(selectSearchQuery);
  const searchQueryCode = useSelector(selectSearchQueryCode);

  const searchQuerySorted = [...searchQuery].sort(
    (a, b) => b.amount - a.amount
  );
  const searchQueryCodeSorted = [...searchQueryCode].sort(
    (a, b) => b.amount - a.amount
  );

  let search = [...searchQuerySorted];

  if (searchQuery.length === 0) {
    // Якщо результати пошуку за текстовим запитом відсутні, використовуємо результати пошуку за кодом
    search = [...searchQueryCodeSorted];
  } else {
    // В іншому випадку використовуємо результати пошуку за текстовим запитом
    search = [...searchQuerySorted];
  }

  if (search.length === 0) {
    toast.error("Нічого не знайдено за вашим запитом!");
  }

  return (
    <main>
      <Container>
        <ProductsList items={search} />
      </Container>
    </main>
  );
};

export default SearchPage;
