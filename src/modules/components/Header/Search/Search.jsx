import React from "react";
import { SearchIcon, Wrap, WrapIcon } from "./Search.styled";

const Search = () => {
  return (
    <Wrap>
      <input type="search" name="search" id="search" />
      <WrapIcon>
        <SearchIcon />
      </WrapIcon>
    </Wrap>
  );
};

export default Search;
