import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { setSearch } from "../../../../redux/search/slice";

import {
  SearchFormContainer,
  SearchInput,
  SearchButton,
  SearchIcon,
} from "./SearchForm.styled";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.trim() === "") {
      toast.error("Будь ласка, введіть пошуковий запит!");
      setSearchTerm("");
      return;
    }
    setSearchTerm(e.target.value);

    dispatch(setSearch(searchTerm));

    navigate(`/search?query=${searchTerm}`);
    setSearchTerm("");
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
