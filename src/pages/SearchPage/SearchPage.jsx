import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  selectSearchQuery,
  selectSearchQueryCode,
} from "../../redux/search/selectors.js";

import ProductsList from "../../shared/components/ProductsList/ProductsList.jsx";
import { Container } from "../../shared/styles/Container";
import { Loader } from "../../shared/components/Loader/Loader.jsx";

const SearchPage = () => {
  const searchQuery = useSelector(selectSearchQuery);
  const searchQueryCode = useSelector(selectSearchQueryCode);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  const searchQuerySorted = [...searchQuery].sort(
    (a, b) => b.amount - a.amount
  );
  const searchQueryCodeSorted = [...searchQueryCode].sort(
    (a, b) => b.amount - a.amount
  );

  let search = [...searchQuerySorted];

  if (searchQuery.length === 0) {
    search = [...searchQueryCodeSorted];
  } else {
    search = [...searchQuerySorted];
  }

  if (search.length === 0) {
    toast.error("Нічого не знайдено за вашим запитом!");
  }

  return (
    <main>
      <Container>
        {loading ? <Loader /> : <ProductsList items={search} />}
      </Container>
    </main>
  );
};

export default SearchPage;
