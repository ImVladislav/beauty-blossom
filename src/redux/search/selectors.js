import { createSelector } from "reselect";

const selectGoods = (state) => state?.goods || {};
const selectSearch = (state) => state?.search || "";

const searchFilter = (items, searchQuery) => {
  if (!searchQuery) {
    return items;
  }

  const searchTerms = searchQuery.toLowerCase().trim().split(/\s+/);

  return items.filter(({ name }) => {
    const lowerCaseName = name.toLowerCase();
    return searchTerms.every((term) => lowerCaseName.includes(term));
  });
};

export const selectSearchQuery = createSelector(
  [selectSearch, selectGoods],
  (search, goods) => {
    if (!goods.items) {
      return [];
    }
    return searchFilter(goods.items, search);
  }
);

const searchFilterByCode = (items, searchQuery) => {
  if (!searchQuery) {
    return items;
  }

  const searchTerms = searchQuery.trim().split(/\s+/);

  return items.filter(({ code, _id }) => {
    if (code === undefined) {
      console.error("There is no product code - id:", _id);
      return false;
    }

    const orderCodeString = code.toString();
    return searchTerms.every((term) => orderCodeString.includes(term));
  });
};

export const selectSearchQueryCode = createSelector(
  [selectSearch, selectGoods],
  (search, goods) => {
    if (!goods.items) {
      return [];
    }
    return searchFilterByCode(goods.items, search);
  }
);
