import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { selectSearchQuery } from "../../redux/search/selectors.js";

import ProductsList from "../../modules/components/ProductsList/ProductsList.jsx";
import { Container } from "../../modules/components/Container.js";

const SearchPage = () => {
  const searchQuery = useSelector(selectSearchQuery);

  if (searchQuery.length === 0) {
    toast.error("Нічого не знайшла за вашим запитом!");
    return;
  }

  return (
    <main>
      <Container>
        <ProductsList items={searchQuery} />
      </Container>
    </main>
  );
};

export default SearchPage;
