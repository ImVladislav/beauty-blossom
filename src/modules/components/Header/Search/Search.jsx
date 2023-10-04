import React from "react";
import { Input, SearchIcon, Wrap, Button } from "./Search.styled";

const Search = () => {
  return (
    <Wrap>
      <Input
        type="search"
        name="search"
        id="search"
        placeholder="Пошук товарів"
      />
      <Button>
        <SearchIcon />
      </Button>
    </Wrap>
  );
};

export default Search;
