import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { selectSearchQuery } from "../../redux/search/selectors.js";

import { ProductListContainer, ProductItem } from "./SearchPage.styled";

export const SearchPage = () => {
  const searchQuery = useSelector(selectSearchQuery);

  if (searchQuery.length === 0) {
    toast.error("Нічого не знайшла за вашим запитом!");
    return;
  }

  return (
    <ProductListContainer>
      <h1>Пошук</h1>
      {searchQuery.map((product) => (
        <ProductItem key={product.id}>
          <h3>{product.name}</h3>
        </ProductItem>
      ))}
    </ProductListContainer>
  );
};
