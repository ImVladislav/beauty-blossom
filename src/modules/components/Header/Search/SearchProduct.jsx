import React, { useState } from "react";

import SearchForm from "./SearchForm/SearchForm";
import ProductList from "./ProductList/ProductList";

import data from "../../../../tovary.json";

const SearchProduct = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };
  return (
    <>
      <SearchForm data={data} onSearch={handleSearch} />
      <ProductList products={searchResults} />
    </>
  );
};

export default SearchProduct;
