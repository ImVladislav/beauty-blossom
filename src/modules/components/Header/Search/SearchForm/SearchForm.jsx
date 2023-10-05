import React, { useState } from "react";
import {
  SearchFormContainer,
  SearchInput,
  SearchButton,
  SearchIcon,
} from "./SearchForm.styled";

const SearchForm = ({ data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const results = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(results);
  };

  return (
    <SearchFormContainer>
      <form onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Пошук товарів..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <SearchButton type="submit">
          <SearchIcon />
        </SearchButton>
      </form>
    </SearchFormContainer>
  );
};

export default SearchForm;
